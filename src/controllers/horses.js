require('dotenv').config()
const Horses = require('../services/horses')
const horses = new Horses(process.env.API_URL)

exports.addPage = function (req, res) {
  res.render('horses/add-horse')
}

exports.add = function (req, res) {
  horses.create(req.body).then(() => {
    res.redirect('/horses')
  })
}

