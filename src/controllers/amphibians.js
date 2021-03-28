require('dotenv').config()
const Amphibians = require('../services/amphibians')
const amphibians = new Amphibians(process.env.API_URL)

exports.all = function (req, res) {
    res.render('add-amphibian')
}

exports.get = function (req, res) {
    amphibians.get(req.params.id).then((data) => {
        res.render('view-amphibian', {cat: data})
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

