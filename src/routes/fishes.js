const express = require('express')
const router = new express.Router()
const fishes = require('../controllers/fishes')

router.get('/', fishes.all)
router.get('/add', fishes.addPage)
router.get('/:id', fishes.get)
router.post('/', fishes.add)
router.post('/edit/:id', fishes.edit)
router.post('/remove/:id', fishes.remove)

module.exports = router
