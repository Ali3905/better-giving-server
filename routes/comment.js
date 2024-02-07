const express = require('express')
const { handleCheckUserIsLoginOrNot } = require('../middlewares/user')
const { handleCreateComment } = require('../controllers/comment')
const router = express.Router()


router.post("/", handleCheckUserIsLoginOrNot, handleCreateComment )
// router.get("/", handleCheckUserIsLoginOrNot, handleGetComment )



module.exports = router