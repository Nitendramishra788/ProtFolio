const nodeMailer = require("nodemailer");

const sendEmail = async (
    name,
    email,
    message
) => {

    // transporter

    const transporter =
        nodeMailer.createTransport({

            service: "gmail",

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