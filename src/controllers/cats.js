require('dotenv').config()
const Cats = require('../services/cats')
const cats = new Cats(process.env.API_URL)

exports.all = function (req, res) {
  cats.all().then((data) => {
    res.render('cats', { cats: data })
  })
}

exports.get = function (req, res) {
  cats.get(req.params.id).then((data) => {
    res.render('view-cat', { cat: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-cat')
}

exports.addOrEdit = function (req, res) {
  if(req.body.edit==='Edit') {
    cats.get(req.body.id).then((data) => {
      res.render('edit-cat', { cat: data })
    })
  } else if(req.body.id) {
    cats.update(req.body).then(() => {
      res.redirect('/cats')
    })
  } else {
    cats.create(req.body).then(() => {
      res.redirect('/cats')
    })
  }
}

