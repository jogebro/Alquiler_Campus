const Empleado = require('../model/Empleado.js');

const getEmpleados = async (req, res) => {
    try {
        const data = await Empleado.find();
        res.json({
            empleados: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
};

// Listar los empleados con el cargo de "Vendedor"
const getEmpleadosVendedor = async (req, res) => {
    try {
        const data = await Empleado.find({cargo: 'Vendedor'});
        res.json({
            empleados_Vendedor: data
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
};

module.exports = {
    getEmpleados,
    getEmpleadosVendedor
};