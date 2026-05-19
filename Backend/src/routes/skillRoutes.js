const express = require("express");

const router = express.Router();

const {
    createSkill,
    getAllSkills,
    getSingleSkill,
    updatedSkill,
    deleteSkill
} = require("../controllers/skillController");

const authMiddleware = require("../middlewares/authMiddleware");

const upload = require("../middlewares/uploadMiddleware");


// Create Skill

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    createSkill
);


// Get All Skills

router.get(
    "/",
    getAllSkills
);


// Get Single Skill

router.get(
    "/:id",
    getSingleSkill
);


// Update Skill

router.put(
    "/:id",
    authMiddleware,
    upload.single("image"),
    updatedSkill
);


// Delete Skill

router.delete(
    "/:id",
    authMiddleware,
    deleteSkill
);

module.exports = router;