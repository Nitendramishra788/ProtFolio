const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    image:{
        type: String,
        required: true
    },

    title:{
        type: String,
        required: true

    },

    description:{
        type: String,
        required: true
    },

    live:{
        type: String,
        
    },

    code:{
        type: String,
       
    }

});


const Project = mongoose.model("Project" , projectSchema);

module.exports = Project;