const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({

    cpf: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    numberAccount: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('User', schema)