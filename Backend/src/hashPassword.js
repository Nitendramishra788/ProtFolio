const bcrypt = require("bcryptjs");

const hashPassword = async ()=>{
    const password ="nitmishra9956";
    const hashedPassword = await bcrypt.hash(password , 10);

    console.log("actual password : " + password);
    console.log("hashed password : " + hashedPassword);
}

hashPassword();


// for the checking pass function
// const passCheck = async ()=>{
//     const password ="nitmishra9956";
//     const hashedPassword = "$2b$10$xZsNlDTUb6PegILOEoIeduvLkaIV1aDqf3BO8pfLseUsq8kx7st0m";

//     const isMatched = await bcrypt.compare(
//         password,
//         hashedPassword
//     );
//     console.log("password matched : " + isMatched);
// }

// passCheck();



