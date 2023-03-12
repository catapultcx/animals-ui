import express from 'express'
import { add, addPage, all, get, updatePage, update, remove } from '../controllers/cats.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.get('/update/:id', updatePage)
router.post('/update', update)
router.get('/remove/:id', remove)

export default router
