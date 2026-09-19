const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (buffer) => {

    const result = await cloudinary.uploader.upload(
        `data:image/jpeg;base64,${buffer.toString("base64")}`,
        {
            folder: "portfolio",
        }
    );



    return result;
};

module.exports = {
    uploadToCloudinary,
};