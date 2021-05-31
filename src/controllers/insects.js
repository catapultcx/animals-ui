require('dotenv').config()
const Insects = require('../services/insects')
const insects = new Insects(process.env.API_URL)

exports.all = function (req, res) {
  insects.all().then((data) => {
    res.render('insect/list', { insects: data })
  })
}

exports.get = function (req, res) {
  insects.get(req.params.id).then((data) => {
    res.render('insect/view', { insect: data })
  })
}

exports.addPage = function (req, res) {
  res.render('insect/add')
}

exports.add = function (req, res) {
  insects.create(req.body).then(() => {
    res.redirect('/insects')
  })
}

exports.delete = function (req, res) {
  insects.delete(req.params.id).then(() => {
    res.redirect('/insects')
  })
}