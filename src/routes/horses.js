const express = require('express')
const router = new express.Router()
const horses = require('../controllers/horses')

router.get('/', horses.all)
router.get('/add', horses.addPage)
router.get('/:id', horses.get)
router.get('/delete/:id', horses.delete)
router.get('/edit/:id', horses.edit)
router.post('/', horses.add)
router.post('/update/:id', horses.update)

module.exports = router
