import express from 'express'
import {add, addPage, all, del, filter, view, update, updatePage} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/view/:id', view)
router.post('/', add)
router.get('/update/:id', updatePage)
router.post('/update/:id', update);
router.get('/delete/:id', del)
router.get('/filter', filter)

export default router
