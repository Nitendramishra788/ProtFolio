const express = require('express');
const cors = require('cors');
const testRoutes = require('./routes/testRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();  

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/test" , testRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/projects" , projectRoutes);

// app.get("/" , (req , res) => {
//     res.send("Hello World");
// });

// Error Middleware
app.use(errorMiddleware);


module.exports = app;