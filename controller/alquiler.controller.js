const Alquiler = require('../model/Alquiler.js');

// Listar todos los alquileres activos junto con los datos de los clientes relacionados.
const getAlquileresAct = async (req, res) => {
    try {
        const data = await Alquiler.find({estado: true})
        .select('-_id -estado');

        res.json({
            activos: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
};

// Obtener los detalles del alquiler con el ID_Alquiler específico.
const getAlquilerId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Alquiler.findById( id )
        .populate('cliente', 'nombre -_id')
        .populate('automovil', 'marca -_id');

        res.json({
            alquiler: data
        });
      } catch (err) {
        res.status(500).json({ error: 'Not Found :C'});
      };
};

module.exports = {
    getAlquileresAct,
    getAlquilerId
};