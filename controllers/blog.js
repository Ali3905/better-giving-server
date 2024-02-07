const blog = require("../models/blog")

async function handleCreateBlog(req, res) {
    try {
        const { title, description, category, thumbnail } = req.body
        if(!title || !description) {
           throw Error("Fill all the fields")
        }
        console.log({category});
        const Blog = await blog.create({
            title, description, category, thumbnail, user : req.user
        })
        return res.status(201).json({
            success : true,
            createdBlog : Blog
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

async function handleGetAllBlogs(req, res) {
    try {
        const Blogs = await blog.find({}).populate("user").sort({createdAt : -1})
        return res.status(200).json({
            success : true,
            Blogs
        })
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

async function handleUpdateBlogWithId(req, res) {
    try {
        const blogID = req.params.id
        const { title, description, category, thumbnail } = req.body
        const updatedBlog = { title, description, category, thumbnail }
        if (!blogID) {
            throw Error("Please provide Blog ID")
        }
        if (!updatedBlog) {
            throw Error("Please provide updated Blog")
        }
        const Blog = await blog.findByIdAndUpdate(blogID, updatedBlog)
        return res.status(200).json({
            success : true,
            message : "Blog Updated"
        })
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

async function handleDeleteBlogWithId(req, res) {
    try {
        const blogID = req.params.id
        if (!blogID) {
            throw Error("Please provide Testimonial ID")
        }
        const Blog = await blog.findByIdAndDelete(blogID)
        return res.status(200).json({
            success : true,
            message : "Blog Deleted"
        })
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}


async function handleGetBlogById(req, res) {
    try {
        const blogID  = req.params.id
        const Blog = await blog.findById(blogID)
        .populate("user")
        .populate({
            path : "comments",
            populate : {
                path : "user",
                model : "user"
            }
        })
        if (!Blog) {
            throw Error("Give correct blog Id")
        }
        return res.status(200).json({
            success : true,
            Blog
        })
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = {
    handleCreateBlog,
    handleGetAllBlogs,
    handleUpdateBlogWithId,
    handleDeleteBlogWithId,
    handleGetBlogById
}