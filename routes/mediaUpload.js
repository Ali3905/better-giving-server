const express = require("express")
const router = express.Router()
const { mediaUpload } = require("../middlewares/upload")

router.post("/", mediaUpload.single("media") , async(req, res)=>{
    const { media } = req.body
    if (!media) {
        return res.status(400).json({
            success : false,
            message : "File is not uploaded"
        })
    }
    return res.status(200).json({
        success : true,
        media
    })
})


module.exports = router