exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Gollum // Cinesystem',
      description: 'API com salas e sessões de filmes que estão sendo exibidas no cinesystem',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://fguedes.me',
      description: 'Site d\'O Criador'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
