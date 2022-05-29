'use strict'
const express = require('express')
const path = require('path')
const app = express()
const formData = require('express-form-data')
const index = require('./routes/index')
const cats = require('./routes/cats')
const govkukFrontendPath = 'node_modules/govuk-frontend'

const nunjucks = require('nunjucks')

nunjucks.configure([
    path.join(__dirname, 'views'),
    path.join(govkukFrontendPath, '/govuk'),
    path.join(govkukFrontendPath, '/govuk/components'),],
  { autoescape: true, express: app })

app.set('view engine', 'html')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(formData.parse({}))
app.use(formData.union())

app.use('/assets', express.static(
  path.join(govkukFrontendPath, '../govuk/assets')))
app.use('/assets/js/all.js', express.static(
  path.join(govkukFrontendPath, '../govuk/all.js')))
app.use('/public', express.static(path.join(__dirname, '../public')))

app.use('/', index)
app.use('/cats', cats)

module.exports = app
