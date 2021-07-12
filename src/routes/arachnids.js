const express = require('express')
const router = new express.Router()
const arachnids = require('../controllers/arachnids')

router.post('/', arachnids.add)

module.exports = router
