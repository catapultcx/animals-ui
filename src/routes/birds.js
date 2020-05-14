const express = require('express')
const router = new express.Router()
const birds = require('../controllers/birds')

router.get('/', birds.all)
router.get('/add', birds.addPage)
router.get('/:id', birds.get)
router.post('/', birds.add)
router.get('/:id/delete', birds.delete)
router.get('/:id/update', birds.updatePage)
router.post('/:id', birds.update)


module.exports = router
