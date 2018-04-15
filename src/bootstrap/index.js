'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const bin = require('./bin')
const appRoutes = require('./../routes')
const config = require('./../config')
const errorHandler = require('./../app/middleware/errorHandler')
const providers = require('./../providers')

let app = express()
app.server = http.createServer(app)

app.use(bodyParser.json({
    limit: config.bodyLimit
}))

providers.database.boot(app);

//express make use of routes
appRoutes(app)

//catch error on output
app.use(errorHandler)

//port app listen on
const port = process.env.APP_PORT || 4000

//create port app listen on
app.server.listen(port)

console.log(`app listening on port ${port}`)

module.exports = app