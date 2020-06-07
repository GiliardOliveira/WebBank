const mongoose = require('mongoose')
const Client = mongoose.model('Client')



exports.post = (req, res, next) => {
    var client = new Client(req.body)
    client
        .save()
        .then(x => {
            res.status(200).send({
                message: 'sucess'
            })
        }).catch(e => {
            res.status(400).send({
                message: 'failed',
                data: e
            })
        })
}

exports.get = (req, res, next) => {
    Client.find({},'name cpf numberAccount balance').
    then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({
            message: 'failed'
        })
    })
}