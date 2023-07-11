/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
import { User } from '../models/user'
import bcryptjs from 'bcryptjs'
import { generateJWT } from '../utils/generate-jwt'


export const createUser = async(req:Request, res:Response) => {
	const {name, lastname, email, password, rol} = req.body

	try {
		const user = new User({name,lastname,email,password, rol})
		const salt = bcryptjs.genSaltSync()
		user.password = bcryptjs.hashSync(password, salt)

		await user.save()

		const token = await generateJWT( user.id )

		res.json({
			msg: 'User Create',
			user,
			token
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}


export const getUsers = async(req:Request, res:Response) => {
	const users = await User.find()
	res.json({users})
}
export const getUserById = async(req:Request, res:Response) => {
	const {id} = req.params
	try {
		const user = await User.findById(id)

		res.json({
			user
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}
export const updateUser = async(req:Request, res:Response) => {
	const {id} = req.params
	const {_id, ...resto} = req.body
	try {
		const user = await User.findByIdAndUpdate(id, resto, { new: true })
		res.json({user})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}
export const deleteUser = async(req:Request, res:Response) => {
	const {id} = req.params
	try {
		const user = await User.findByIdAndUpdate(id, {estado: false}, {new: true})
	
		res.json({user})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}