const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')
const auth = require('../services/authService')


router.post('/', auth.authorize, controller.post)
router.get('/clients', controller.get)
router.get('/clients/:cpf', controller.getByCPF)
router.put('/deposit/:id', auth.authorize, controller.depositById)
router.put('/withdraw/:id', auth.authorize, controller.withdrawById)
router.post('/auth', controller.authentic)



module.exports = router