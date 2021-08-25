const express = require('express')
const router = new express.Router()
const dogs = require('../controllers/dogs')

router.post('/', dogs.add)
router.get('/add', dogs.addPage)

module.exports = router
