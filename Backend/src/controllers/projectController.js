const Project = require("../models/project");
const asyncHandler = require("../middlewares/asyncHandler");

// create project 

const CreateProject = asyncHandler(
    async(req , res)=>{

        const {
           
            title,
            description,
            live,
            code,

        } = req.body;

        // upload image
        const image = req.file.filename;

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

    // get all projects

    const getProjects = asyncHandler(
        async(req , res)=>{
            const Projects = await Project.find();

            res.status(200).json({
                success: true,
                count: Projects.length,
                Projects,
            });
        }
    );


    // get single project using by id

    const getSingleProject = asyncHandler(
        async(req , res)=>{
            const project = await Project.findById(req.params.id);

            // check if project exists or not

            if(!project){
                return res.status(404).json({
                    success: false,
                    message: "Project not found",
                })
            }

            res.status(200).json({
                success: true,
                project,
            })
        }


    )

    // update project by id

    const updatedProject = asyncHandler(
        async(req , res)=>{
            const project = await Project.findById(
                req.params.id
            )

            // check if project exists or not

            if(!project){
                return res.status(404).json({
                    success: false,
                    message: "Project not found",
                })
            }

                // update project

               project.image = req.body.image || project.image;
               project.title = req.body.title || project.title;
               project.description = req.body.description || project.description;
               project.live = req.body.live || project.live;
               project.code = req.body.code || project.code;

            //    save project
            await project.save();

            res.status(200).json({
                success: true,
                message: "Project updated successfully",
                project: updatedProject,
            });
        }
    );


    // delete project by id

    const deletedProject = asyncHandler(
        async(req , res)=>{
            const project= await Project.findById(
                req.params.id
            )

            // check if project exists or not

            if(!project){
                return res.status(404).json({
                    success: false,
                    message: "Project not found",
                })
            }

            // delete project
            await project.deleteOne();

            res.status(200).json({
                success: true,
                message: "Project deleted successfully",

            })

            
        }
    );



    module.exports = {
    CreateProject,
    getProjects,
    getSingleProject,
    updatedProject,
    deletedProject,
    }
