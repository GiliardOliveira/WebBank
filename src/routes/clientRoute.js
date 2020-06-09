const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')


router.post('/', controller.post)
router.get('/clients', controller.get)
router.get('/clients/:cpf', controller.getByCPF)
router.put('/deposit/:id', controller.depositById)
router.put('/withdraw/:id', controller.withdrawById)

module.exports = router