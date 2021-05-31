const express = require('express')
const router = new express.Router()
const insects = require('../controllers/insects')

router.get('/', insects.all)
router.get('/add', insects.addPage)
router.get('/:id', insects.get)
router.post('/', insects.add)

module.exports = router
