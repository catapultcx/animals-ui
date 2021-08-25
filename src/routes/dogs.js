const express = require('express')
const router = new express.Router()
const dogs = require('../controllers/dogs')

router.post('/', dogs.add)
router.get('/add', dogs.addPage)
router.get('/', dogs.all)
router.get('/:id', dogs.get)

module.exports = router
