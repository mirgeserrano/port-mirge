const { response } = require("express");
const { enviarCorreo } = require("../helpers/estructura");

const CorreoEnvido = async (req, res = response) => {
  const { nombre, apellido, correoDestino, asuntop, contenido } = req.body;

  try {
    //prueba();
    enviarCorreo(nombre, apellido, correoDestino, asuntop, contenido);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: true,
      smg: "vuelva intentar",
    });
  }
};
module.exports = {
  CorreoEnvido,
};
