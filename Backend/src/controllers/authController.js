const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");

const generateToken = require("../utils/generateToken");

const asyncHandler = require("../middlewares/asyncHandler");

const loginAdmin = asyncHandler(async (req, res) => {

  // Get email and password from frontend
  const { email, password } = req.body;

  // Find admin
  const admin = await Admin.findOne({ email });

  // Check admin exists
  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  // Compare password
  const isMatch = await bcrypt.compare(
    password,
    admin.password
  );

  // Check password
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Generate JWT token
  const token = generateToken(admin._id);

  // Send response
  res.status(200).json({
    success: true,
    message: "Admin logged in successfully",
    token,
  });

});

module.exports = {
  loginAdmin,
};