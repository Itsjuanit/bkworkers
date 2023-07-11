import express from 'express'
import { createWorker, getWorker, updateStatus, updateWorker } from '../controller/workers'


const router = express.Router()

router.get('/', getWorker)
router.post('/', createWorker)
router.put('/:id', updateWorker)
router.patch('/:id', updateStatus)

export default router