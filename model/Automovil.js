const { Schema, model } = require('mongoose');

const Automovil = Schema({
    marca:{
        type:String,
        required:true
    }, 
    modelo: {
        type:String,
        required:true
    },
    capacidad:{
        type:Number,
        required:true
    },
    sucursal:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    }
    
})

module.exports = model('Automovil', Automovil, 'Automoviles');