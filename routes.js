const controller = require('./controller')

const routes = [
  {
    method: 'GET',
    url: '/city/:city',
    handler: controller.getByCity
  },
  {
    method: 'GET',
    url: '/cities',
    handler: controller.getCities
  },
  {
    method: 'GET',
    url: '/cities/:uf',
    handler: controller.getCitiesByState
  },
  {
    method: 'GET',
    url: '/states',
    handler: controller.getStates
  },
]

module.exports = routes
