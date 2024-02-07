const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    category: Array,
    thumbnail: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
        default: [],
    }],
}, { timestamps: true })

const blog = mongoose.model("blog", blogSchema)

module.exports = blog