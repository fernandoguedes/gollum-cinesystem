const boom = require('boom')
const service = require('./service')

exports.getByCity = async (request, reply) => {
  try {
    return service.getByCity(request.params.city)
  } catch (error) {
    throw boom.boomify(error)
  }
}
