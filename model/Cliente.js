const { Schema, model } = require('mongoose');

const Cliente = Schema({
    nombre: {
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    }
})

module.exports = model('Clientes', Cliente, 'Clientes');