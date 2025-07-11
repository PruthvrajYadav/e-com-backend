const Order = require("../model/order")

exports.getOrder = async (req, res) => {
    try {
        const data = await Order.find().populate("userRef").populate("productRef")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postOrder = async (req, res) => {
    try {
        const data = await Order.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putOrder = async (req, res) => {
    try {
        const data = await Order.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const data = await Order.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

