const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
    try {
        const token = req.header("auth-token");
        if (!token) return res.status(401).json({ errors: true, message: "Token missing" });

        const user = jwt.verify(token, process.env.SEC); // make sure JWT_SECRET is set
        if (user.role !== "admin") {
            return res.status(403).json({ errors: true, message: "Not authorized" });
        }

        console.log(user);
        next();
    } catch (error) {
        return res.status(401).json({ errors: true, message: error.message });
    }
};

module.exports = isAdmin;
