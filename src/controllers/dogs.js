require('dotenv').config()
const Dogs = require('../services/dogs')
const dogs = new Dogs(process.env.API_URL)

exports.add = function (req, res) {
  dogs.create(req.body).then(() => {
    res.redirect('/')
  })
}

exports.addPage = function (req, res) {
  res.render('add-dog')
}

