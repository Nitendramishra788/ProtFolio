const express = require("express");

const {
    CreateProject,
} = require("../controllers/projectController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    CreateProject
);

module.exports = router;