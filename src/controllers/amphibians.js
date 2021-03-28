require('dotenv').config()
const Amphibians = require('../services/amphibians')
const amphibians = new Amphibians(process.env.API_URL)

exports.all = function (req, res) {
    amphibians.all().then((data) => {
        res.render('amphibians', { amphibians: data})
    })
}

exports.get = function (req, res) {
    amphibians.get(req.params.id).then((data) => {
        res.render('view-amphibian', {amphibian: data})
    })
}

exports.addPage = function (req, res) {
    res.render('add-amphibian')
}

exports.add = function (req, res) {
    amphibians.create(req.body).then(() => {
        res.redirect('/amphibians')
    })
}

