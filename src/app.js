const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')


const app = express();

mongoose.connect(config.conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const Client = require('./models/clientModel')


const indexRoute = require('./routes/indexRoute')
const clientRoute = require('./routes/clientRoute')

app.use(bodyParser.json({
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,x-access-token');
    res.header('Access-Control-Allow-Headers', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

app.use('/', indexRoute)
app.use('/', clientRoute)

module.exports = app