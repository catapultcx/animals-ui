const express = require('express')
const router = new express.Router()
const reptiles = require('../controllers/reptiles')

router.get('/', reptiles.all)
router.get('/add', reptiles.addPage)
router.get('/:id', reptiles.get)
router.post('/', reptiles.add)
router.get('/delete/:id', reptiles.delete)

module.exports = router
