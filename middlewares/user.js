const jwt = require("jsonwebtoken");
const user = require("../models/user");
const jwt_secret = "^*$#&^*))This&*(&is&*&)(*%secret"

async function handleCheckUserIsLoginOrNot(req, res, next) {
    try {
        const authToken = req.header('authToken');
        if (!authToken) {
            return res.json({ success: false, message: "Authenticate using correct creds" })
        }
        const data = jwt.verify(authToken, jwt_secret)
        const User = await user.findById(data.user.id)
        req.user = User
        next()
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


module.exports = {
    handleCheckUserIsLoginOrNot
}