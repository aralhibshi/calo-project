const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 4000

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: true
}))

// Require Route
const indexRouter = require('./routes/index')
const jobRouter = require('./routes/job')
const userRouter = require('./routes/user')
const employerRouter = require('./routes/employer')

// Mount Route
app.use('/', indexRouter)
app.use('/', jobRouter)
app.use('/', userRouter)
app.use('/', employerRouter)

// Listen
app.listen(port, function() {
    console.log(`App is Running on PORT ${port}`)
})