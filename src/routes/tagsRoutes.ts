import express from 'express'
import { createTag, getTag } from '../controllers/tags'

const router = express.Router()

router.get('/', getTag)
router.post('/', createTag)

export default router