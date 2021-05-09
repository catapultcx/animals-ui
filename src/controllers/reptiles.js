require('dotenv').config()
const Reptiles = require('../services/reptiles')
const reptiles = new Reptiles(process.env.API_URL)

exports.all = function (req, res) {
  reptiles.all().then((data) => {
    res.render('reptiles', { reptiles: data })
  })
}

exports.get = function (req, res) {
  reptiles.get(req.params.id).then((data) => {
    res.render('view-reptile', { reptile: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-reptile')
}

exports.add = function (req, res) {
  reptiles.create(req.body).then(() => {
    res.redirect('/reptiles')
  })
}