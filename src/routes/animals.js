import express from 'express'
import { add, addPage, all, get, remove } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.post('/:id', remove)

export default router
