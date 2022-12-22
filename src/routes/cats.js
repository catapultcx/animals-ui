import express from 'express'
import { add, addPage, all, get, remove } from '../controllers/cats.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.delete('/:id', remove)

export default router
