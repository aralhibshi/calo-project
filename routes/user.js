const express = require('express')
const router = express.Router()

// Controller
const userCtrl = require('../controllers/user')

// Routes
router.get('/users', userCtrl.getUsers)
router.post('/user/signup', userCtrl.createUser)
router.post('/user/delete', userCtrl.deleteUser)

module.exports = router