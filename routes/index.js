const express = require('express')
const router = express.Router()

// Controller
const indexCtrl = require('../controllers/index')

// Routes
router.get('/', indexCtrl.getUsers)

module.exports = router