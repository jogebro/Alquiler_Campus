const Reserva = require('../model/Reserva.js');

//  Mostrartodas las reservas pendientes con los datos del cliente y el automóvil reservado.
const getReservaPendiente = async (req, res) => {
    try {
        const data = await Reserva.find({estado: true})
            .select('-_id -estado');
        res.json({
            pendientes: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    } 
};

module.exports = {
    getReservaPendiente,
};