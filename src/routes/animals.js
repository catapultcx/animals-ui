import express from 'express'
import {add, addPage, all, get, update, remove, updatePage, filterPage, filter} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/filter', filterPage)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)

router.get('/update/:id', updatePage)
router.post('/update', update)

router.get('/delete/:id', remove)

router.post('/filter', filter)

export default router
