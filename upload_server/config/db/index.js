const mongoose=require('mongoose');
require('dotenv/config');
async function connect(){
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Connected to Mongoose! マングースに接続！');
    }catch(err){
        console.error("Error: ",err.message);
    }
}

module.exports={connect}