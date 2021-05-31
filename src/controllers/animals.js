require('dotenv').config()
const Animals = require('../services/animals')
const animals = new Animals(process.env.API_URL)

exports.results = function (req, res) {
    animals.results(req.query.keyword).then((data) => {
        res.render('results', {animals: data.body})
    });
}
