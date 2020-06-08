const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')
const auth = require('../services/authService')


router.post('/', auth.authorize, controller.post)
router.get('/clients', controller.get)
router.get('/clients/:cpf', controller.getByCPF)
router.put('/bankmove/:id', controller.bankMoveById)
router.post('/auth', controller.auth)

module.exports = router