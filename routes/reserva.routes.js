const { Router } = require("express");
const { getReservaPendiente } = require('../controller/reserva.controller.js');

const router = Router();

router.get("/", getReservaPendiente);

module.exports = router;