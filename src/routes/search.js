const express = require('express')
const router = new express.Router()
const search = require('../controllers/search')

router.get('/', search.searchPage)
router.post('/', search.search)

module.exports = router
