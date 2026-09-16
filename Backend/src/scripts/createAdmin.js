const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

require("dotenv").config();

const createAdmin = async () => {

    try {
        // Connect to database
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Your database connected to Atlas for admin creation..!");

        // Check if admin already exists
        const existAdmin = await Admin.findOne();

        if (existAdmin) {
            console.log("Admin already exists. Cannot create another admin.");
            return;
        }

        // Admin credentials
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin
        const admin = await Admin.create({
            email,
            password: hashedPassword
        });

        console.log("Admin created successfully");
        console.log("Admin ID:", admin._id);

    } catch (error) {

        console.error("Error creating admin:", error);

    } finally {

        await mongoose.disconnect();
        console.log("MongoDB connection closed");

    }
};

createAdmin();