const cloudinary = require("../config/cloudinary");
const { Readable } = require("stream");

const uploadToCloudinary = (buffer) => {
    // upload logic

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "portfolio"
            },

            (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            }
        );

        Readable.from(buffer).pipe(uploadStream);
    });
};

module.exports = {
    uploadToCloudinary,
};