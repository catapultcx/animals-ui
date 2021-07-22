require('dotenv').config()
const Horses = require('../services/horses')
const horses = new Horses(process.env.API_URL)

exports.all = function (req, res) {
  horses.all().then((data) => {
    res.render('horses/horses', { horses: data })
  })
}

exports.get = function (req, res) {
  horses.get(req.params.id).then((data) => {
    res.render('horses/view-horse', { horse: data })
  })
}

exports.addPage = function (req, res) {
  res.render('horses/add-horse')
}

exports.add = function (req, res) {
  horses.create(req.body).then(() => {
    res.redirect('/horses')
  })
}

