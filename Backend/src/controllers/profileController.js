const Profile = require("../models/Profile");

const asyncHandler = require(
  "../middlewares/asyncHandler"
);

// CREATE OR UPDATE PROFILE
const createOrUpdateProfile =
  asyncHandler(async (req, res) => {

    const {
      name,
      age,
      about,
      message,
    } = req.body;

    // uploaded image
    const image = req.file
      ? req.file.filename
      : null;

    // check existing profile
    let profile =
      await Profile.findOne();

    // if profile exists -> update
    if (profile) {

      profile.name =
        name || profile.name;

      profile.age =
        age || profile.age;

      profile.about =
        about || profile.about;

      profile.message =
        message || profile.message;

      // update image only if uploaded
      if (image) {

        profile.image = image;

      }

      await profile.save();

      return res.status(200).json({
        success: true,
        message:
          "Profile updated successfully",
        profile,
      });

    }

    // create new profile
    profile = await Profile.create({
      name,
      age,
      about,
      message,
      image,
    });

    res.status(201).json({
      success: true,
      message:
        "Profile created successfully",
      profile,
    });

  });

// GET PROFILE
const getProfile = asyncHandler(
  async (req, res) => {

    const profile =
      await Profile.findOne();

    res.status(200).json({
      success: true,
      profile,
    });

  }
);

module.exports = {
  createOrUpdateProfile,
  getProfile,
};