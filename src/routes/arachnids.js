const express = require('express')
const router = new express.Router()
const arachnids = require('../controllers/arachnids')

router.post('/', arachnids.add)

router.get('/', arachnids.all)
router.get('/add', arachnids.addPage)
router.get('/:id', arachnids.get)

module.exports = router
