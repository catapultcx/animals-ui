require('dotenv').config()
const Animals = require('../services/animals')
const animals = new Animals(process.env.API_URL)

exports.results = function (req, res) {
    const data = animals.results(req.query.keyword)
    res.render('results',{animals: data})
}
