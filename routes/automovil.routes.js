const { Router } = require("express");
const { getAutoDisponible } = require('../controller/automovil.controller.js');

const router = Router();

router.get("/", getAutoDisponible);

module.exports = router;