const express = require('express')
const router = new express.Router()
const horses = require('../controllers/horses')
const cats = require("../controllers/cats");

router.get('/', horses.all)
router.get('/add', horses.addPage)
router.post('/', horses.add)
router.get('/:id', horses.get)
router.get('/delete/:id', horses.delete)

module.exports = router
