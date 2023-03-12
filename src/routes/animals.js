import express from 'express'
import {add, addPage, all, get, deleteAnimal, update, edit} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.get('/edit/:id', edit)
router.post('/', add)
router.put('/:id', update)
router.delete('/:id', deleteAnimal)

export default router
