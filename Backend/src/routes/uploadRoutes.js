const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const upload = require("../middlewares/uploadMiddleware");

const {
    uploadImage
} = require("../controllers/uploadController");

// upload image route

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    uploadImage
);

module.exports = router;