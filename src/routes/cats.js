const express = require('express')
const router = new express.Router()
const cats = require('../controllers/cats')

router.get('/', cats.all)
router.get('/add', cats.addPage)
router.get('/:id', cats.get)
router.post('/', cats.add)
router.post('/:id', cats.edit)

module.exports = router
