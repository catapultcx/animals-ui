import express from 'express'
import {add, addPage, all, get, deleteAnimal} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/:id', get)
router.post('/', add)
router.delete('/:id', deleteAnimal)

export default router
