import express from 'express'
import { index } from '../controllers/animals.js'

const router = new express.Router()
router.get('/', index)
export default router
