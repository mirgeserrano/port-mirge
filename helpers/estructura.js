// Importar el paquete Nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config();

//Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },

  //autorizar acceder a google
  tls: {
    rejectUnauthorized: false,
  },
});

const enviarCorreo = async (
  nombre,
  apellido,
  correoDestino,
  asuntop,
  contenido
) => {
  try {
    // Configurar el correo
    let mailOptions = {
      from: correoDestino,
      to: "mirgeserrano@gmail.com",
      subject: asuntop,
      html: `<h1>${correoDestino}</h1>
      <p>Hola soy ${nombre} ${apellido}, te estoy contactando por que: ${contenido}<p/>
    `,
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

module.exports = { enviarCorreo };
