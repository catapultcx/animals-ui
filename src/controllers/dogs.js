require('dotenv').config()
const Dogs = require('../services/dogs')
const dogs = new Dogs(process.env.API_URL)

exports.add = function (req, res) {
  dogs.create(req.body).then(() => {
    res.redirect('/dogs')
  })
}

exports.addPage = function (req, res) {
  res.render('add-dog')
}

exports.all = function (req, res) {
  dogs.all().then((data) => {
    res.render('dogs', { dogs: data })
  })
}

exports.get = function (req, res) {
  dogs.get(req.params.id).then((data) => {
    res.render('view-dog', { dog: data })
  })
}

exports.del = function (req, res) {
  dogs.del(req.params.id).then((data) => {
    res.redirect('/dogs')
  })
}