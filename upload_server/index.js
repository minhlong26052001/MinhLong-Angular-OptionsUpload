const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
app.use(express.static(path.join(__dirname, '/images')))

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}));




app.use(bodyParser.json())

// connect DB
const db = require('./config/db/index')
db.connect()


//import models 
const Product = require('./models/product.model')

var storage = multer.diskStorage({
    destination: "images", 
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
        // console.log(file.originalname)
    }
})
maxSize = 10*1024*1024
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
}).single("file")


app.post("/upload", (req, res)=>{
    upload(req, res, err =>{
        if(err){
            res.json({message: err.message})
        }
        else{
            //Insert Data into DB
            let productInfo =   new  Product({
                name: req.body.name,
                thumbPath: req.file.filename,
                price: req.body.price
            })

             productInfo.save()
// chuwa
            res.json({message: "Success"});
            // console.log(("file receive: ", req.file.filename))
        }
    })
})

app.get('/', (req, res) => {
    res.send("EEE")
})

//Api - Get product info
app.get('/products/:id', async(req,res)=>{
    try {
        let productInfo = await Product.findById(req.params.id);
        res.json(productInfo);
    } catch (err){
        res.json("Message: " + err.message)
    }
})

//Api - Get all products
app.get("/products",async(req,res)=>{
    try{
        let products = await Product.find();
        res.json(products);
    }catch{
        res.json("Message: " + err.message);
    }
})


app.listen(port, (req, res) => {
    console.log("Server is running")
})