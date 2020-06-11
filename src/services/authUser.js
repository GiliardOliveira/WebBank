const mongoose = require('mongoose')
const Client = mongoose.model('Client')

exports.authenticate = async (data) => {
    const res = await Client.findOne({
        cpf: data.cpf
    })
    return res
}