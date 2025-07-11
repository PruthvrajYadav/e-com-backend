const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    userRef: {
        type: mongoose.Schema.ObjectId
    },
    productRef: {
        type: [mongoose.Schema.ObjectId]
    },
    total: {
        type: Number
    },
    quantity:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model("order",orderSchema)
