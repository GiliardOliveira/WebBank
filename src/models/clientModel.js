const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    numberAccount: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    balance: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Client', schema)