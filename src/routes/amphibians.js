const express = require('express')
const router = new express.Router()
const amphibians = require('../controllers/amphibians')

router.get('/', amphibians.all)
router.get('/add', amphibians.addPage)
router.get('/:id', amphibians.get)
router.post('/', amphibians.add)
router.get('/delete/:id', amphibians.delete)
module.exports = router
