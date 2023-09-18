const { Schema, model } = require('mongoose');

const Empleado = Schema({
    nombre:{
        type: String,
        ref: 'Cliente',
        required: true

      },
      cargo: { 
        type: String,
        required:true
      }
})

module.exports = model('Empleado', Empleado, 'Empleados')