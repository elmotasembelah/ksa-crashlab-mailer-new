require("dotenv").config();
const nodemailer = require("nodemailer");

const createTransporter = () => {
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  console.log("user from env:", user);
  console.log("password from env:", password);

  try {
    if (user === undefined || password === undefined) {
      throw new Error("missing env variables (user, password)");
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.mail",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    return transporter;
  } catch (error) {
    console.log("error occured while creating the transporter");
    console.log(error);
    return 0;
  }
};

const defaultMailOptions = {
  from: {
    name: "Web Wizard",
    address: "elmotasembelahelsayed@gmail.com",
  },
  to: "elmotasembelahelsayed12@gmail.com",
  // to: "esraamortada809@gmail.com",
  //   to: "moatasm-belah@spatiumsoftware.com",

  subject: "Send email using nodemailer and gmail",
  text: "Hello world text",
  html: "<b>Hello World html</b>",
};

const generateMailOptions = ({ name, email, subject, message }) => {
  const mailOptions = {
    from: {
      name: "KSA crash lab Contact Form",
      address: "elmotasembelahelsayed@gmail.com",
    },
    to: "elmotasembelahelsayed12@gmail.com",
    // to: "esraamortada809@gmail.com",
    //   to: "moatasm-belah@spatiumsoftware.com",

    subject: "Send email using nodemailer and gmail",
    text: "Hello world text",
    html: `<p>${name}</p>
    <p>${email}</p>
    <p>${subject}</p>
    <p>${message}</p>
    `,
  };

  return mailOptions;
};

module.exports = { defaultMailOptions, generateMailOptions, createTransporter };
