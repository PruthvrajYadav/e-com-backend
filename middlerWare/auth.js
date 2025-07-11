const jwt = require("jsonwebtoken")

const isAuth = async (req,res,next) => {
    try {
        const token = req.header("auth-token")
        const verifyToken = await jwt.verify(token,process.env.SEC)
        if(!verifyToken) return res.status(500).json({errors:true,message:"Access denied"})
        next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }   
}

module.exports = isAuth