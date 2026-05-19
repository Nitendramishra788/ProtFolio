const asyncHandler = require("../middlewares/asyncHandler");

const uploadImage = asyncHandler(
    async(req , res)=>{

        // check if file is uploaded

        if(!req.file){
            return res.status(400).json({
                success : false,
                message : "No file uploaded!"
            })
        };

        // return the file path

        res.status(200).json({
            success : true,
            message : "File uploaded successfully!",
            image: req.file.filename
        });
    }
);

module.exports = {
    uploadImage
};
