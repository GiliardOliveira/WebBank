const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose)


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
        type: String,
        required: true,
        index: true,
        unique: true
    },
    numberAccount: {
        type: Number,
        index: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    balanceN: {
        type: Number
    }

})
schema.plugin(AutoIncrement, {
    id: 'order_seq',
    inc_field: 'numberAccount'
})


module.exports = mongoose.model('Client', schema)