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

exports.addOrDeleteOrEdit = function (req, res) {
  if(req.body.deleteOrEdit==='Delete') {
    horses.delete(req.body.id).then(() => {
      res.redirect('/horses')
    })
  } else if(req.body.deleteOrEdit==='Edit') {
    horses.get(req.body.id).then((data) => {
      res.render('horses/edit-horse', { horse: data })
    })
  } else if(req.body.id) {
    horses.update(req.body).then(() => {
      res.redirect('/horses')
    })
  } else {
    horses.create(req.body).then(() => {
      res.redirect('/horses')
    })
  }
}


