import express from 'express'
import { add, addPage, all, get, del, getAnimalTypes } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.get('/delete/:id', del)

export default router
