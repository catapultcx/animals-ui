require('dotenv').config();
const Search = require('../services/search');
const search = new Search(process.env.API_URL);

exports.searchPage = function (req, res) {
  res.render('search/index');
};

exports.search = function (req, res) {
  search.search(req.body.query).then((data) => {
    console.log(data);
    res.render('search/result', { animals: data })
  })
};
