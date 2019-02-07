const fastify = require('fastify')({
  logger: true
})

const routes = require('./routes')
const swagger = require('./swagger')
const PORT = process.env.PORT || 3000

fastify.register(require('fastify-swagger'), swagger.options)

routes.forEach((route, index) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
