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
			const orderStatus = 'aguardando atendimento'
			
			let solicitation = new Solicitation()
			solicitation.problem = problem
			solicitation.expectedResult = expectedResult
			solicitation.additionalInformation = additionalInformation
			solicitation.type = type
			solicitation.openingDate = openingDate
			solicitation.orderStatus = orderStatus
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
	
	async update({ request, auth, response }) {
		try {
			const id = request.params.id
			const problem = request.input("problem")
			const expectedResult = request.input("expectedResult")
			const additionalInformation = request.input("additionalInformation")
			const type = request.input("type")
			const openingDate = request.input("openingDate")
			const orderStatus = request.input("orderStatus")
			
			let solicitation = new Solicitation()
			
			solicitation = await Solicitation.findBy('_id', id);
			
			solicitation.problem = problem
			solicitation.expectedResult = expectedResult
			solicitation.additionalInformation = additionalInformation
			solicitation.type = type
			solicitation.openingDate = openingDate
			solicitation.orderStatus = orderStatus
			
			let success = await solicitation.save()
			return response.status(201).json({
				status: 'ok',
				message: 'Solicitation updated',
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
	
	async search({ request, auth, response }) {
        try {
            const solicitation = await Solicitation.findBy('_id', request.input("id"))
            return solicitation
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                message: error.message
            })
        }
    }
	
	async search({ request, auth, response }) {
        try {
            const solicitation = await Solicitation.findBy('_id', request.input("id"))
            return solicitation
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
