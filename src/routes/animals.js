import express from 'express'
import { add, addPage, update, updatePage, all, get, del, search } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/search', search)
router.get('/add', addPage)
router.post('/', add)
router.get('/update/:id', updatePage)
router.post('/update/:id', update)
router.get('/:id', get)
router.post('/delete/:id', del)

export default router
