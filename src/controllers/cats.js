require('dotenv').config()
const Cats = require('../services/cats')
const cats = new Cats(process.env.API_URL)

exports.all = function (req, res) {
  cats.all().then((data) => {
    res.render('cat/list', { cats: data })
  })
}

exports.get = function (req, res) {
  cats.get(req.params.id).then((data) => {
    res.render('cat/view', { cat: data })
  })
}

exports.addPage = function (req, res) {
  res.render('cat/add')
}

exports.add = function (req, res) {
  cats.create(req.body).then(() => {
    res.redirect('/cats')
  })
}

