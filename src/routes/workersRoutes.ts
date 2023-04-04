import express from 'express'
import { createWorker, getWorker, updateWorker } from '../controller/workers'


const router = express.Router()



router.get('/', getWorker)
router.post('/', createWorker)
router.put('/:id', updateWorker)


export default router