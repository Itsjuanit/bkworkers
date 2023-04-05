import mongoose from 'mongoose'

export const dbConnection = async() => {
	const mongoConnection : string  =process.env.MONGO_URL ?? ''
	try {
		mongoose.connect(mongoConnection)
		console.log('Base de datos online')
	} catch (error) {
		console.log(error)
	}
}
