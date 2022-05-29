import express from 'express'
import { add, addPage, all, get } from '../controllers/cats.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)

export default router
