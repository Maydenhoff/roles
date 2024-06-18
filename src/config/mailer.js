const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});
const sendEmailActivate = (to, id) => {
    transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: to,
        subject: "Registro",
        text : "Gracias por registrarte",
        // falta redireccionar al front
        // ESTA PARTE DE CAMBIA CON EL FRONT
        html: `<b>Please click here for validation</b>
        `,
        
    }, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log("email sent.");
    }
})
}


module.exports = { sendEmailActivate };
