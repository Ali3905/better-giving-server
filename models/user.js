const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email : String,
    password : String,
    userName : String,
    avatar : String,
    role : {
        type : String,
        enum : ["NORMAL", "ADMIN", "SUPERADMIN"],
        default : "NORMAL"
    }
}, {timestamps : true})

const user = mongoose.model('user', userSchema);
module.exports = user;