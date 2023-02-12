import express from 'express'
import {add, addPage, all, view, update, updatePage} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/view/:id', view)
router.post('/', add)
router.get('/update/:id', updatePage)
router.post('/update/:id', update);

export default router
