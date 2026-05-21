const nodemailer  = require("nodemailer");

const sendEmail = async (
    name,
    email,
    message
) => {

      console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    // transporter

    const transporter =
        nodemailer.createTransport({

            host: "smtp.gmail.com",

            port: 465,

            secure: true,

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }

        });

    // mail options

    const mailOptions = {

        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_USER,



        subject: "New Portfolio Contact Message 🚀",

        html: `

        <h2>New Client Message</h2>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Message:</strong>
            ${message}
        </p>

        `
    };

    // send email

    await transporter.sendMail(
        mailOptions
    );

};

module.exports = sendEmail;