const { response } = require("express");
const { enviarCorreo } = require("../helpers/estructura");

const CorreoEnvido = async (req, res = response) => {
  const { correoDestino, asunto, contenido } = req.body;
  try {
    //prueba();
    enviarCorreo(correoDestino, asunto, contenido);
    //console.log("kjsdasj");
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
