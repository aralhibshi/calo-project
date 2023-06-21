const express = require('express')
const router = express.Router()

// Controller
const employerCtrl = require('../controllers/employer')

// Routes
router.post('/employer/signup', employerCtrl.employer_create_post)
router.post('/employer/delete', employerCtrl.employer_delete)

module.exports = router