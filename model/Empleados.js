const { Schema, model } = require('mongoose');

const Empleados = Schema({
    nombre:{
        type: String,
        ref: 'Cliente',
        required: true

      },
      rol: { 
        type:Date,
        required:true
      }
})