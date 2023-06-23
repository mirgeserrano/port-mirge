const { Router } = require("express");
const router = Router();
const { CorreoEnvido } = require("../controllers/form");

router.post("/", CorreoEnvido);

module.exports = router;
