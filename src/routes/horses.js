const express = require('express')
const router = new express.Router()
const horses = require('../controllers/horses')

router.get('/', horses.all)
router.get('/add', horses.addPage)
router.get('/:id', horses.get)
router.post('/', horses.add)

module.exports = router
