require('dotenv').config()
const Arachnids = require('../services/arachnids')
const arachnids = new Arachnids(process.env.API_URL)

exports.add = function (req, res) {
  arachnids.create(req.body).then(() => {
    res.redirect('/arachnids')
  })
}



