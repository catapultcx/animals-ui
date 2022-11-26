import express from 'express'
import { add, addPage, all, get, del } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.post('/delete/:id', del)

export default router
