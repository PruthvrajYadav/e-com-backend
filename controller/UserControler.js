const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) return res.status(500).json({ errors: true, message: "user alredy exist" })

        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (!userExist) return res.status(500).json({ errors: true, message: "invalid emali or pasword" })

        const verifyPassword = await bcrypt.compare(req.body.password, userExist.password)
        if (!verifyPassword) return res.status(500).json({ errors: true, message: "invalid emali or pasword" })

        const token = await jwt.sign({ id: userExist._id, role: userExist.role }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: userExist } })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}
