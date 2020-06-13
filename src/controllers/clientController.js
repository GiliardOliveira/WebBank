const mongoose = require('mongoose')
const Client = mongoose.model('Client')
const authUser = require('../services/authUser')
const auth = require('../services/authService')
const md5 = require('md5')


exports.authentic = async (req, res, next) => {
    try {
        const client = await authUser.authenticate({
            cpf: req.body.cpf
        })
        console.log(client)

        if (!client) {
            res.status(200).send({
                message: 'User not found',
                status: false
            })
            return
        }
        const token = await auth.generateToken({
            id: client._id,
            cpf: client.cpf,
            name: client.name,
            numberAccount: client.numberAccount,
            balance: client.balance
        })
        res.status(200).send({
            token: token,
            status: true,
            id: client._id,
            data: {
                name: client.name,
                cpf: client.cpf,
                numberAccount: client.numberAccount,
                balance: client.balance
            }
        })
    } catch (e) {
        res.status(400).send({
            message: 'failed',
            data: e
        })
    }
}

exports.post = (req, res, next) => {

    const client = new Client({
        name: req.body.name,
        cpf: req.body.cpf,
        password: md5(req.body.password),
        balance: req.body.balance,
        balanceN: req.body.balanceN
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


exports.getByID = (req, res, next) => {
    Client.findById(req.params.id).
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

exports.depositById = (req, res, next) => {

    var var1 = parseInt(req.body.balance)
    if (var1 < 0) {
        var value = Error
    } else {
        value = req.body.balance
    }
    Client.findByIdAndUpdate(req.params.id, {
        $inc: {
            balance: value
        }
    }).then(x => {
        res.status(200).send({
            message: 'sucess'
        })
    }).catch(e => {
        res.status(400).send({
            message: 'enter a correct value ',
            data: e
        })
    })
}

exports.withdrawById = (req, res, next) => {
    var val1 = parseInt(req.body.balance)
    var val2 = parseInt(req.body.balanceN)
    if (val1 < val2) {
        var value = Error
    } else if (val1 === val2) {
        value = (val1) * (-1)
    } else if (val1 === 0) {
        value = Error
    } else {
        value = ((val1 - val2) * (-1))
    }
    Client.findByIdAndUpdate(req.params.id, {
        $inc: {
            balance: value
        }
    }).then(x => {
        res.status(200).send({
            message: 'sucess'
        })
    }).catch(e => {
        res.status(400).send({
            message: 'enter a correct value ',
            data: e
        })
    })

}