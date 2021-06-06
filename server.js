'use strict'

const http = require('http')
const express = require('express')
const routes = require('./routes')
const path = require('path')
const MySQL = require('./database/MySQL')

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const DB = new MySQL()
DB.createTables()
DB.createUsers()

app.use('/', (sol, res, next) => {
  sol.db = DB
  next()
})
app.use('/', routes)

const server = http.createServer(app)

server.listen(8080, () => console.log('Servidor ejecutandose en el puerto 8080'))