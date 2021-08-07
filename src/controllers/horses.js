require('dotenv').config()
const Horses = require('../services/horses')
const horses = new Horses(process.env.API_URL)

exports.all = function (req, res) {
  horses.all().then((data) => {
    res.render('horses', { horses: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-horse')
}

exports.add = function (req, res) {
  horses.create(req.body).then(() => {
    res.redirect('/horses')
  })
}

