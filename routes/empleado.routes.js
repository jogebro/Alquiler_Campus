const { Router } = require("express");
const { getEmpleados, getEmpleadosVendedor } = require('../controller/empleado.controller.js');

const router = Router();

router.get("/", getEmpleados);
router.get("/vendedor", getEmpleadosVendedor);

module.exports = router;