const multer = require('multer');
const path = require('path');

// storage configuration for multer

const storage = multer.diskStorage({
    destination: function(req , file , cd){
        cd(null , "src/uploads");
    },

    filename: function(req , file , cd){

        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cd(null , uniqueName);  
        

    }
});


// filter for uploaded files

const fileFilter = function(req , file , cd){
    const allowedTypes  = /jpeg|jpg|png|gif/;

    const isVaild =allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if(isVaild){
    cd(null , true);
  } else {
    cd(
        new Error("Only image files are allowed!"),
    );
  }

};

// cteate multer middleware

const upload = multer({
    storage,
    fileFilter,
})

module.exports = upload;