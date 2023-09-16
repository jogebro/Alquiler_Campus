const { Schema, model } = require('mongoose');

const Alquiler = Schema({
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
      },
    fecha_Inicio:{
        type:Date,
        required:true
    },
    fecha_fin:{
        type:Date,
        required:true
    },
    automovil:{
        type: Schema.Types.ObjectId,
        ref: 'Automovil',
        required: true
    },
    costo:{
        type: Number,
        required:true
    },
    estado:{
        type: Boolean,
        default:true,
        required:true
    }
})

module.exports = model('Alquiler', Alquiler, 'Alquileres');