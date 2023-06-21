const express = require('express')
const app = express()

const port = 4000

// Require Route
const indexRouter = require('./routes/index')

// Mount Route
app.use('/', indexRouter)

// Listen
app.listen(port, function() {
    console.log(`App is Running on PORT ${port}`)
})