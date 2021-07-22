const express = require('express')
const router = new express.Router()
const horses = require('../controllers/horses')

router.get('/add', horses.addPage)
router.post('/', horses.add)

module.exports = router
