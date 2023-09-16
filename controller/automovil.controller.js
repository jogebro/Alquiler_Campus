const Automovil = require('../model/Automovil.js');

// Mostrar todos los clientes registrados en la base de datos.
const getAutoDisponible = async (req, res) => {
    try {
        const data = await Automovil.find();
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