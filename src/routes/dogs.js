const express = require('express')
const router = new express.Router()
const dogs = require('../controllers/dogs')

router.get('/', dogs.all)
router.get('/add', dogs.addPage)
router.get('/:id', dogs.get)
router.post('/', dogs.add)
router.get('/delete/:id', dogs.delete)

module.exports = router
