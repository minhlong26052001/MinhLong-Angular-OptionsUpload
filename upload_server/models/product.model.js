const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema=new Schema({
    name: {type: String},
    thumbPath: {type:String},
    price:{type: Number},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
});

module.exports=mongoose.model('Product', ProductSchema);