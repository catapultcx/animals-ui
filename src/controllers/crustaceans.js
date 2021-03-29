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

exports.addPage = function (req, res) {
  res.render('add-crustaceans')
}

exports.add = function (req, res) {
  crustaceans.create(req.body).then(() => {
    res.redirect('/crustaceans')
  })
}