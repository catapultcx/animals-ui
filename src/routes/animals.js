import express from 'express'
import {add, addPage, index} from '../controllers/animals.js'

const router = new express.Router()
router.get('/', index)
router.get('/add', addPage)
router.post('/add', add)
export default router
