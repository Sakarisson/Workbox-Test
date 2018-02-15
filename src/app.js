const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

global.__basedir = path.join(__dirname, '../')

app.set('view engine', 'pug')
app.set('views', path.join(global.__basedir, 'src', 'views'))
routes(app)

app.use('/public', express.static('public'))

module.exports = app
