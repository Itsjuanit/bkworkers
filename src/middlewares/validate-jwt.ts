/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request,Response } from 'express'
import jwt from 'jsonwebtoken'
import {User} from '../models/user'

export const validateJWT = async (req:Request,res:Response,next:NextFunction)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			msg: 'there is not token in the request'
		})
	}

	try {
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		const {uid}: any = jwt.verify(token,secret)
		const user = await User.findById(uid)

		if(!user) {
			return res.status(401).json({
				msg: 'the user not exits in DB'
			})
		}

		if(!user.status) {
			return res.status(401).json({
				msg: 'User desactivated'
			})
		}

		
		(<any>req).user = user
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			msg: 'Token is not valid'
		})
	}
}

