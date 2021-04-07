const express = require('express')
const router = new express.Router()
const crustaceans = require('../controllers/crustaceans')

router.get('/', crustaceans.all)
router.get('/add', crustaceans.addPage)
router.get('/:id', crustaceans.get)
router.get('/update/:id', crustaceans.updatePage)
router.post('/', crustaceans.add)
router.post('/update/:id', crustaceans.update)
router.post('/delete/:id', crustaceans.delete)

module.exports = router
