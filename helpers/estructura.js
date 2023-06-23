// Importar el paquete Nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config();

// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },

  //autorizar aceder a google
  tls: {
    rejectUnauthorized: false,
  },
});

const prueba = async () => {
  try {
    await transporter.verify().then(() => {
      console.log("conecto");
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

const enviarCorreo = async (correoDestino, asunto, contenido) => {
  try {
    // Configurar el correo
    let mailOptions = {
      from: process.env.EMAIL_PASSWORD,
      to: correoDestino,
      subject: asunto,
      text: contenido,
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
// Función para enviar el correo

// Llamar a la función enviarCorreo con los datos necesarios
//enviarCorreo("mirgesrrano@gamil.com", "asuto 1", "holaa");
module.exports = { enviarCorreo, prueba };
