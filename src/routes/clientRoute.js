const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')

router.post('/', controller.post)
router.get('/clients', controller.get)
router.get('/clients/:cpf', controller.getByCPF)
router.put('/bankmove/:id', controller.bankMoveById)

module.exports = router