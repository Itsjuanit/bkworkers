import { Request, Response } from 'express'
import { Tag } from '../models/tag'


export const createTag = async (req: Request,res: Response) => {
	const {name}  = req.body
	try {
		const tag = new Tag({name})

		await tag.save()

		res.json({
			msg: 'Tag created',
			tag
		})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}

export const getTag = async (req: Request,res: Response) => {
    
	const {name} = req.query

	if(name){
		const tags = await Tag.find({name})
		if(!tags.length){
			return res.json({msg: 'la busqueda no arrojo resultados'})
		}
		return res.json({tags})
	}
	const tags = await Tag.find()
	res.json({tags})
}