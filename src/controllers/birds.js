require('dotenv').config()
const Birds = require('../services/birds')
const birds = new Birds(process.env.API_URL)

exports.all = function (req, res) {
  birds.all().then((data) => {
    res.render('birds', { birds: data })
  })
}

exports.get = function (req, res) {
  birds.get(req.params.id).then((data) => {
    res.render('view-bird', { bird: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-bird')
}

exports.add = function (req, res) {
  birds.create(req.body).then(() => {
    res.redirect('/birds')
  })
}

exports.delete = function (req, res) {
  birds.delete(req.params.id).then((data) => {
    res.redirect('/birds')
  })
}

exports.updatePage = function (req, res) {
  birds.get(req.params.id).then((data) => {
    res.render('update-bird', { bird: data })
  })
}
exports.update = function (req, res) {
  const bird = req.body
  bird.id = (req.params.id)
  birds.update(bird).then((data) => {
    res.redirect('/birds')
    
  })
}
