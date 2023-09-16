const { Router } = require("express");
const { getClientes } = require('../controller/cliente.controller.js');

const router = Router();

router.get("/", getClientes);

module.exports = router;