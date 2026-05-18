const Project = require("../models/project");
const asyncHandler = require("../middlewares/asyncHandler");

// create project 

const CreateProject = asyncHandler(
    async(req , res)=>{

        const {
            image,
            title,
            description,
            live,
            code,

        } = req.body;

        const project = await Project.create({
            image,
            title,
            description,
            live,
            code,

        });

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            project,
        });
    });

    module.exports = {
    CreateProject,
    }
