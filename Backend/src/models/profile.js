const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    age:{
        type: String,
        required: true
    },

    image:{
        type: String,
        required: true
    },

    about:{
        type: String,
        
    },
    message:{
        type: String,
    }
},

{
    timestamps: true
}

);


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;