const { Schema, model } = require('mongoose');

const Reserva = Schema({
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true

      },
      fecha_Inicio: { 
        type:Date,
        required:true
      },
      automovil:{
        type: Schema.Types.ObjectId,
        ref: 'Automovil',
        required: true
      },
      estado: {
        type:Boolean,
        default:true,
        required: true
      }
})