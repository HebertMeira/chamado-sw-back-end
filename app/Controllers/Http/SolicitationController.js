'use strict'

const Solicitation = use('App/Models/Solicitation')

class SolicitationController {
	async register({ request, auth, response }) {
		try {
			const problem = request.input("problem")
			const expectedResult = request.input("expectedResult")
			const additionalInformation = request.input("additionalInformation")
			const type = request.input("type")
			const openingDate = request.input("openingDate")
			
			let solicitation = new Solicitation()
			solicitation.problem = problem
			solicitation.expectedResult = expectedResult
			solicitation.additionalInformation = additionalInformation
			solicitation.type = type
			solicitation.openingDate = openingDate
			let success = await solicitation.save()
			return response.status(201).json({
				status: 'ok',
				message: 'Solicitation registered',
				success: success,
				UserID: Solicitation['_id']
			})
		} catch (error) {
			console.log(error.message)
			response.status(403).json({
				status: 'error',
				debug_error: error.message,
			})
		}
	}
	
	async list({ request, auth, response }) {
        try {
            const solicitations = await Solicitation.all()
            return solicitations
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                message: error.message
            })
        }
    }
}

module.exports = SolicitationController
