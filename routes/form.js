const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { mailSend } = require("../controllers/form");

router.get("/new", (req, res) => {
  res.json({
    ok: true,
  });
});

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").normalizeEmail().not().isEmpty(),
    check("asuntop", "El asunto es obligatorio").not().isEmpty(),
    check("contenido", "Recuerda añadir el contenido, min 10 carateres")
      .not()
      .isEmpty()
      .isLength({ min: 10 }),
  ],

  mailSend
);

module.exports = router;
