require("dotenv").config();

const generateToken = require("./utils/generateToken");

const token = generateToken("123456789");

console.log("Generated Token : " + token);