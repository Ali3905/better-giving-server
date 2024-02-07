const express = require("express")
const { handleCreateUser, handleLoginUser, handleGetUserById, handleMakeAdmin } = require("../controllers/user")
const { handleCheckUserIsLoginOrNot } = require("../middlewares/user")
const { avatarUpload } = require("../middlewares/upload")
const router = express.Router()

router.post("/", avatarUpload.single("avatar"), handleCreateUser)
router.post("/login", handleLoginUser)
router.get("/getUser", handleCheckUserIsLoginOrNot, handleGetUserById)
router.patch("/makeAdmin", handleCheckUserIsLoginOrNot, handleMakeAdmin)

module.exports = router