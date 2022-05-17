const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema=new Schema({
    name: {type: String},
    thumbPath: {type:String}
});

module.exports=mongoose.model('Product', ProductSchema);