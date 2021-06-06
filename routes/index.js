'use strict'

const validateSession = require('../helpers/validate-session');
const Router = require('express').Router()
const ViewLogin = require('./view-login')
const Login = require('./login')
const ListCalendar = require('./list-calendar')
const CreateDate = require('./create-date')
const UpdateDate = require('./update-date')
const ViewDates = require('./view-dates')

Router.get('/', ViewLogin)
Router.post('/login', Login)
Router.get('/list-calendar', validateSession, ListCalendar)
Router.post('/create-date', validateSession, CreateDate)
Router.put('/update-date', validateSession, UpdateDate)
Router.get('/dates', ViewDates)

module.exports = Router
