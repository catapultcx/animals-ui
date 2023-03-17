import express from 'express'
import { add, addPage, all, get, remove, update, updatePage, filter } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/filter', filter)
router.get('/:id', get)
router.post('/', add)
router.post('/:id', remove)
router.post('/update/:id', update)
router.get('/update/:id', updatePage)


export default router
