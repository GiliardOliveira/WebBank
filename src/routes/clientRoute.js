const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')
const auth = require('../services/authService')


router.post('/', controller.post)
router.get('/clients', controller.get)
router.get('/:cpf', controller.getByCPF)
router.get('/clients/:id', controller.getByID)
router.put('/deposit/:id', controller.depositById)
router.put('/withdraw/:id', controller.withdrawById)
router.post('/auth', controller.authentic)



module.exports = router