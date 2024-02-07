const dotenv = require("dotenv").config()

const express = require("express")
const cors = require("cors")

// Creating Routes
const userRoute = require("./routes/user")
const testimonialRoute = require("./routes/testimonial")
const blogRoute = require("./routes/blog")
const commentRoute = require("./routes/comment")
const mediaRoute = require("./routes/mediaUpload")

// Functions
const { connectToMongo } = require("./connections")

// Creating app and connections
const PORT = 5000
const app = express()
connectToMongo("mongodb+srv://muhammadali30905:aliahmed@better-giving.en0hxvz.mongodb.net/")
.then(console.log("Mongo connected"))
.catch(err => console.log(err.message))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.get("/", (req, res) => {
    res.send("HomePage")
})

// Handling Routes
app.use("/api/user", userRoute)
app.use("/api/testimonials", testimonialRoute)
app.use("/api/blogs", blogRoute)
app.use("/api/comments", commentRoute)
app.use("/api/media", mediaRoute)

app.listen(PORT, () => console.log(`App is started at PORT:${PORT}`))