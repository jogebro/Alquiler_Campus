const Cliente = require('../model/Cliente.js');

// Mostrar todos los clientes registrados en la base de datos.
const getClientes = async (req, res) => {
    try {
        const data = await Cliente.find();
        res.json({
            clientes: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
};

module.exports = {
    getClientes,
};