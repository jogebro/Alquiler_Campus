const Automovil = require('../model/Automovil.js');

// Obtener todos los automóviles disponibles para alquiler.
const getAutoDisponible = async (req, res) => {
    try {
        const data = await Automovil.find({estado: true})
            .select('-_id -estado');
        res.json({
            disponibles: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
};

module.exports = {
    getAutoDisponible,
};