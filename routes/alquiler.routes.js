const { Router } = require("express");
const { getAlquileresAct, getAlquilerId } = require('../controller/alquiler.controller.js');

const router = Router();

router.get("/", getAlquileresAct);
router.get("/:id", getAlquilerId);

module.exports = router;