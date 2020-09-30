require('dotenv').config()
const Fishes = require('../services/fishes')
const fishes = new Fishes(process.env.API_URL)

exports.all = function (req, res) {
  fishes.all().then((data) => {
    res.render('fishes/index', { fishes: data })
  })
}

exports.get = function (req, res) {
  fishes.get(req.params.id).then((data) => {
    res.render('fishes/view-fish', { fish: data })
  })
}

exports.addPage = function (req, res) {
  res.render('fishes/add-fish')
}

exports.add = function (req, res) {
  fishes.create(req.body).then(() => {
    res.redirect('/fishes')
  })
}

exports.edit = function (req, res) {
  fishes.update(req.params.id, req.body).then(() => {
    res.redirect('/fishes')
  })
}

exports.remove = function (req, res) {
  fishes.delete(req.params.id).then(() => {
    res.redirect('/fishes')
  })
}

