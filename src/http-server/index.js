const Koa = require('koa')
// TODO: Change to koa-path-router
const router = require('koa-router')()

let server

exports.create = function () {
  const config = require('~/src/config')
  const logger = require('~/src/logging').logger(module)
  const routes = require('./routes')

  const app = new Koa()

  routes.register(app, router)

  app.use(router.routes())
  app.use(router.allowedMethods())

  // TODO: Use koa-sslify to add certs
  server = app.listen(config.getHttpServerPort())

  logger.info('Starting on port: ', config.getHttpServerPort())
}

exports.close = function () {
  server.close()
}
