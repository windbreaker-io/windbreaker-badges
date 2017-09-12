// const logger = require('~/src/logging').logger(module)
// const { createDaoHelper } = require('windbreaker-service-util/dao')

let daoHelper

exports.createDao = function () {
  // daoHelper = createDaoHelper({
  //   // modelType: Webhook,
  //   logger,
  //   knexConfig: config.getKnex()
  // })
}

exports.close = async function () {
  return daoHelper.destroy()
}
