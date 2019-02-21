const boom = require('boom')
const service = require('./service')

exports.getByCity = async (request, reply) => {
  try {
    return service.getByCity(request.params.city)
  } catch (error) {
    throw boom.boomify(error)
  }
}

exports.getCities = async (request, reply) => {
  try {
    return service.getCities()
  } catch (error) {
    throw boom.boomify(error)
  }
}

exports.getStates = async (request, reply) => {
  try {
    return service.getStates()
  } catch (error) {
    throw boom.boomify(error)
  }
}
