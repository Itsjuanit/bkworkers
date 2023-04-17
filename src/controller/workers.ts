import { Request, Response } from "express"
import { Tag } from "../models/tag"
import { Worker } from "../models/worker"


export const createWorker = async (req: Request,res: Response) => {
	const {name, tag, phone_number, opinion}  = req.body
	try {
		const worker = new Worker({name, tag, phone_number, opinion})

		await worker.save()

		res.json({
			msg: 'worker created',
			worker
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const getWorker = async (req: Request,res: Response) => {
	const {status} = req.query
	if(status) {
		const worker = await Worker.find({status}).populate('tag', 'name')  	
		res.json({worker})
	}else {
		const worker = await Worker.find().populate('tag', 'name')  
		res.json({worker})

	}
    
}


export const updateWorker = async (req: Request, res: Response) => {

    const {id} = req.params; 

    const {name, tag, phone_number, opinion, status} = req.body

    try {
        const worker = Worker.findByIdAndUpdate(id, {name, tag, phone_number, opinion, status}, {new: true})

		res.json({
			msg: 'worker updated',
			worker
		})
    } catch (error) {
        res.status(400).json({ msg: error})
    }
}