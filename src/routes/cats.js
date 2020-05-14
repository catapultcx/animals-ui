const express = require('express')
const router = new express.Router()
const cats = require('../controllers/cats')

router.get('/', cats.all)
router.get('/add', cats.addPage)
router.get('/:id', cats.get)
router.post('/', cats.add)
router.get('/:id/delete', cats.delete)
router.get('/:id/update', cats.updatePage)
router.post('/:id', cats.update)


module.exports = router
