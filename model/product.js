const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"category1"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
}) 

module.exports = mongoose.model("product01",productSchema)
