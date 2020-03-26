require('dotenv').config()
const Dogs = require('../services/dogs')
const dogs = new Dogs(process.env.API_URL)

exports.all = function (req, res) {
  dogs.all().then((data) => {
    res.render('dogs/dogs', { dogs: data })
  })
}

exports.get = function (req, res) {
  dogs.get(req.params.id).then((data) => {
    res.render('dogs/view-dog', { dog: data })
  })
}

exports.addPage = function (req, res) {
  res.render('dogs/add-dog')
}

exports.add = function (req, res) {
  dogs.create(req.body).then(() => {
    res.redirect('/dogs')
  })
}

exports.delete = function (req, res) {
  dogs.delete(req.params.id).then(() => {
    res.redirect('/dogs')
  })
}

