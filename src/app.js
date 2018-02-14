const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'pug')
routes(app)

module.exports = app
