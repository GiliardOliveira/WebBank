const mongoose = require('mongoose')
const Client = mongoose.model('Client')
const md5 = require('md5')
const auth = require('../services/authService')

exports.auth = (req, res, next) => {
    const data = Client.find({
        cpf: req.params.cpf,
        password: md5(req.params.password)
    })
    const token = auth.generateToken({
        cpf: data.cpf,
        name: data.name
    }).then(x => {
        res.status(20).send({
            token: token,
            data: {
                cpf: data.cpf,
                name: data.name
            }
        })
    })


}



exports.post = (req, res, next) => {
    const client = new Client({
        name: req.body.name,
        cpf: req.body.cpf,
        password: md5(req.body.password),
        balance: req.body.balance
    })
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
    Client.find({}, 'name cpf numberAccount balance').
    then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({
            message: 'failed'
        })
    })
}

exports.getByCPF = (req, res, next) => {
    Client.find({
        cpf: req.params.cpf
    }, 'name cpf numberAccount balance').
    then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({
            message: 'failed'
        })
    })
}


exports.bankMoveById = (req, res, next) => {

    Client.findByIdAndUpdate(req.params.id, {
        $inc: {
            balance: req.body.balance
        }
    }).then(x => {
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