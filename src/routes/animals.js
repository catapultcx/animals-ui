import express from 'express'
import {add, addPage, all, get, update, remove, updatePage} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)

router.get('/update/:id', updatePage)
router.post('/update', update)

router.get('/delete/:id', remove)

export default router
