const express = require('express')
const router = new express.Router()
const cats = require('../controllers/cats')

router.get('/', cats.all)
router.get('/edit/:id', cats.edit);
router.get('/delete/:id', cats.delete);
router.get('/add', cats.addPage);
router.get('/:id', cats.get);
router.post('/', cats.add);
router.post('/update', cats.update);

module.exports = router
