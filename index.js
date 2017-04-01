'use strict'

const express = require('express')
const path = require('path')
const compression = require('compression')
const helmet = require('helmet')

const debug = require('debug')('static-node-server:index')
debug(`Beep bop.. booting up.`)

const app = express()
app.use(compression())
app.use(helmet())

const PORT = 3000

app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(PORT)
debug(`Ready on port ${PORT}!`)
