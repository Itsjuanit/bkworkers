import express from 'express'
import { createTag, getTag } from '../controller/tags'


const router = express.Router()



router.get('/', getTag)
router.post('/', createTag)


export default router