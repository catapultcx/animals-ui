import express from 'express'
import {add, index} from '../controllers/register.js'

const router = new express.Router()
router.get('/', index)
router.post('/', add)
export default router
