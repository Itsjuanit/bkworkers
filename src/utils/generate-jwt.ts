import jwt from 'jsonwebtoken'

export const generateJWT = ( uid = '' ) => {

	return new Promise( (resolve, reject) => {

		const payload = { uid }
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		jwt.sign( payload, secret, {
			expiresIn: '7d'
		}, ( err, token ) => {
			if ( err ) {
				console.log(err)
				reject( 'Could not generate token' )
			} else {
				resolve( token )
			}
		})

	})
}


