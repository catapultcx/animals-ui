const express = require('express')
const router = new express.Router()
const crustaceans = require('../controllers/crustaceans')

router.get('/', crustaceans.all)
router.get('/add', crustaceans.addPage)
router.get('/:id', crustaceans.get)
router.post('/', crustaceans.add)

module.exports = router
