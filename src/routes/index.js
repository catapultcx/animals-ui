import express from 'express'
import { index, login, signup } from '../controllers/index.js'

const router = new express.Router()
router.get('/', index)
router.get('/login', login)
router.get('/signup', signup)

export default router
