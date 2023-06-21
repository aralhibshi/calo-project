const express = require('express')
const router = express.Router()

// Controller
const userCtrl = require('../controllers/user')

// Routes
router.get('/users', userCtrl.getUsers)
router.get('/user/signup', userCtrl.user_create_get)
router.post('/user/signup', userCtrl.createUser)
router.get('/user/signin', userCtrl.user_signin_get)
router.post('/user/signin', userCtrl.user_signin_post)
router.post('/user/delete', userCtrl.deleteUser)

module.exports = router