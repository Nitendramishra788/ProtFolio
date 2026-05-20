const express = require("express");
const router = express.Router();

const {
    createOrUpdateProfile,
    getProfile,
} = require("../controllers/profileController");

const authMiddleware = require(
    "../middlewares/authMiddleware"
);

const upload = require(
    "../middlewares/uploadMiddleware"
);


// get router profile this is public 

router.get(
    "/",
    getProfile,
);

// this is create and update router

router.put(
    "/",
    authMiddleware,
    upload.single("image"),
    createOrUpdateProfile,
);

module.exports = router;