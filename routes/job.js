const express = require('express')
const router = express.Router()

// Controller
const jobCtrl = require('../controllers/job')

// Routes
router.get('/jobs', jobCtrl.job_index_get)

module.exports = router