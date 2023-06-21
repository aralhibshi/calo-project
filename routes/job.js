const express = require('express')
const router = express.Router()

// Controller
const jobCtrl = require('../controllers/job')

// Routes
router.get('/jobs', jobCtrl.job_create_post)

module.exports = router