const express = require('express');
const router = new express.Router();
const birds = require('../controllers/birds');

router.get('/', birds.all);
router.get('/edit/:id', birds.edit);
router.get('/delete/:id', birds.delete);
router.get('/add', birds.addPage);
router.get('/:id', birds.get);
router.post('/', birds.add);
router.post('/update', birds.update);

module.exports = router;
