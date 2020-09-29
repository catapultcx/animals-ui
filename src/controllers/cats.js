require('dotenv').config()
const Cats = require('../services/cats')
const cats = new Cats(process.env.API_URL)

exports.all = function (req, res) {
  cats.all().then((data) => {
    res.render('cats/index', { cats: data })
  })
}

exports.get = function (req, res) {
  cats.get(req.params.id).then((data) => {
    res.render('cats/view-cat', { cat: data })
  })
}

exports.addPage = function (req, res) {
  res.render('cats/add-cat')
}

exports.add = function (req, res) {
  cats.create(req.body).then(() => {
    res.redirect('/cats')
  })
}

exports.edit = function (req, res) {
  cats.update(req.params.id, req.body).then(() => {
    res.redirect('/cats')
  })
}

