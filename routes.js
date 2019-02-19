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

]

module.exports = routes
