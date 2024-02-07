const blog = require("../models/blog");
const comment = require("../models/comment");

async function handleCreateComment(req, res) {
    try {
        const { description, blogId } = req.body
        console.log(req.body);
        if (!description || !blogId) {
            return res.json({ success: false, message: "Please Enter all info" })
        }
        const Comment = await comment.create({
            description, user : req.user
        })

        const UpdatedBlog = await blog.findByIdAndUpdate(blogId, {$push : {comments : Comment} })

        res.status(200).json({ success: true, createdComment : Comment })


    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    handleCreateComment
}