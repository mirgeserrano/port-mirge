const { response } = require("express");
const { check, validationResult } = require("express-validator");
const { enviarCorreo } = require("../helpers/estructura");

const mailSend = async (req, res = response) => {
  const { nombre, correoDestino, asuntop, contenido } = req.body;

  console.log(nombre, correoDestino, asuntop, contenido);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  try {
    enviarCorreo(nombre, correoDestino, asuntop, contenido);
    res.status(200).json({
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
  mailSend,
};
