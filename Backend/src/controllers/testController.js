const asyncHandler = require("../middlewares/asyncHandler");


const testController = asyncHandler(async (req , res) =>{
    res.json({
        success: true,
        message: "Test controller is working"
    })
})


// for the testing purpose middleware error 

// const testController = asyncHandler(async (req, res) => {
//   throw new Error("Testing Error Middleware");
// });

// module.exports = testController;


module.exports = testController;