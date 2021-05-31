const express = require('express')
const router = new express.Router()
const animals = require('../controllers/animals')

router.get('/results', animals.results)

module.exports = router
