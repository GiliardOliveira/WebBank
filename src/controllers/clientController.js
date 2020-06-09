const mongoose = require('mongoose')
const Client = mongoose.model('Client')

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