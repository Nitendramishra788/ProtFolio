const express = require("express");
const upload = require("../middlewares/uploadMiddleware");

const {
    CreateProject,
    getProjects,
    getSingleProject,
    updatedProject,
    deletedProject,
} = require("../controllers/projectController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// this is all projetc routes
router.get(
    "/",
    getProjects
);

// get single project by id
router.get(
    "/:id",
    getSingleProject
);

// create project route
router.post(
    "/",
    authMiddleware,
     upload.single("image"),
    CreateProject,
   
);

// update project route
router.put(
    "/:id",
    authMiddleware,
    updatedProject
);

// delete project route
router.delete(
    "/:id",
    authMiddleware,
    deletedProject

);
module.exports = router;