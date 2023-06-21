const express = require('express')
const router = express.Router()

// Controller
const indexCtrl = require('../controllers/index')

// Routes
router.get('/', indexCtrl.index_get)

module.exports = router