const express = require('express')
const router = new express.Router()
const index = require('../controllers/index')

router.get('/', index.index)
router.get('/login', index.login)
router.get('/signup', index.signup)

module.exports = router
