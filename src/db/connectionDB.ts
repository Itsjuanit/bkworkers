import mongoose from 'mongoose'

export const dbConnection = async() => {
	const mongoConnection : string  ='mongodb+srv://pbottino:1234@cluster0.30zkc.mongodb.net/workersJuan'

    console.log('mognoC', mongoConnection)
	try {
		mongoose.connect(mongoConnection)
		console.log('Base de datos online')
	} catch (error) {
		console.log(error)
	}
}
