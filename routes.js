const controller = require('./controller')

const routes = [
  {
    method: 'GET',
    url: '/city/:city',
    handler: controller.getByCity
  }
]

module.exports = routes
