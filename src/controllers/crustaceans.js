require('dotenv').config()
const Crustaceans = require('../services/crustaceans')
const crustaceans = new Crustaceans(process.env.API_URL)

exports.all = function (req, res) {
  crustaceans.all().then((data) => {
    res.render('crustaceans', { crustaceans: data })
  })
}

exports.get = function (req, res) {
  crustaceans.get(req.params.id).then((data) => {
    res.render('view-crustacean', { crustacean: data })
  })
}

exports.delete = function (req, res) {
  crustaceans.delete(req.params.id).then(() => {
    res.redirect('/crustaceans')
  })
}

exports.updatePage = function (req, res) {
  crustaceans.get(req.params.id).then((data) => {
    res.render('update-crustacean', { crustacean: data })
  })
}

exports.update = function (req, res) {
  crustaceans.update(req.params.id, req.body).then(() => {
    res.redirect('/crustaceans')
  })
}

exports.addPage = function (req, res) {
  res.render('add-crustacean')
}

exports.add = function (req, res) {
  crustaceans.create(req.body).then(() => {
    res.redirect('/crustaceans')
  })
}

