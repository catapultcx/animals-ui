import express from 'express'
import {add, addPage, all, deleteConfirmationPage, deletePage, editPage, get, save} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', all)
router.get('/add', addPage)
router.get('/delete/:id', deleteConfirmationPage)
router.get('/edit/:id', editPage)
router.post('/save', save)
router.post('/:id', deletePage)
router.get('/:id', get)
router.post('/', add)

export default router
