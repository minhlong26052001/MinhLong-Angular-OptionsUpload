const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const multer=require('multer');
const app=express();
const port=3000;

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

var storage = multer.diskStorage({
    destination:"images",
    filename:(req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});
let maxSize = 10 * 1024 * 1024; //10MB
var upload = multer({
storage:storage,
limits:{
    fileSize:maxSize
}
}).single("file");

app.get("/", (req, res)=>{
    res.send("Et o et ...");
});

//API upload file
app.post("/upload", (req,res)=>{
    upload(req, res, err =>{
        if(err){
            res.json({message:err.message})
        }else{
            res.json({message: "Success!"});
            console.log("File received: ",req.file.filename);
        }
    });
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});