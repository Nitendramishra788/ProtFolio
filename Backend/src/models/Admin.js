const mongoose = require("mongoose");

const adminScmema = new mongoose.Schema({
   
    email:{
       type:String,
         required:true,
            unique:true, 
    },

    password:{
        type:String,
        required:true,

    },

    

   
},

{
    timestamps:true,
}


);

const Admin = mongoose.model("Admin", adminScmema);

module.exports = Admin;