import express from 'express'
import { createWorker, getWorker, updateStatus, updateWorker } from '../controllers/workers'
import { validateJWT } from '../middlewares/validate-jwt'


const router = express.Router()

router.get('/', getWorker)
router.post('/', [validateJWT], createWorker)
router.put('/:id',[validateJWT], updateWorker)
router.patch('/:id',[validateJWT], updateStatus)

export default router