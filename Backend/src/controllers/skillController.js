const Skill = require("../models/skills");
const asyncHandler = require("../middlewares/asyncHandler");


// create a new skill

const createSkill = asyncHandler(
    async(req ,res)=>{
        const {title} = req.body;
        // upload image 
        const image = req.file.filename;

        // create skill
        const skill = await Skill.create({
            title,
            image
        });

        res.status(201).json({
            success:true,
            messsage:"Skill created successfully",
            skill
        })
    }
)

// get all skills

const getAllSkills = asyncHandler(
    async(req, res)=>{
        const skills = await Skill.find();

        res.status(200).json({
            success:true,
            count: skills.length,
            skills
        })
    }

);


// get single skill by id

const getSingleSkill = asyncHandler(
    async(req, res)=>{
        const skill = await Skill.findById(
            req.params.id
        )

        // check if skill exists or not

        if(!skill){
            return  res.status(404).json({
                success:false,
                message:"Skill not found"
            })
        }

        res.status(200).json({
            success:true,
            skill
        })
    }
);


// update skill by id

const updatedSkill = asyncHandler(
    async(req , res)=>{

        const skill = await Skill.findById(
            req.params.id
        );

        // check if skill exists

        if(!skill){
            return res.status(404).json({
                success:false,
                message:"Skill not found"
            });
        }

        // update image

        if(req.file){
            skill.image = req.file.filename;
        }

        // update title

        skill.title =
            req.body.title || skill.title;

        // save

        await skill.save();

        res.status(200).json({
            success:true,
            message:"Skill updated successfully",
            skill
        });

    }
);

// delete skill by id

const deleteSkill = asyncHandler(
    async(req , res)=>{
        const skill = await Skill.findById(
            req.params.id
        )

        // check if skill exists or not

        if(!skill){
            return res.status(404).json({
                success:false,
                message:"Skill not found"

            })
        }

        // delete skill
      await skill.deleteOne();

        res.status(200).json({
            success:true,
            message:"Skill deleted successfully"
        })
    }
)



module.exports = {
    createSkill,
    getAllSkills,
    getSingleSkill,
    updatedSkill,   
    deleteSkill 
}