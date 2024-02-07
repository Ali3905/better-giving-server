const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
}, {timestamps : true})

const comment = mongoose.model("comment", commentSchema)

module.exports = comment