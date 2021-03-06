const configUtil = require('windbreaker-service-util/config')
const path = require('path')

const ServiceConfig = require('~/src/models/ServiceConfig')
const config = module.exports = new ServiceConfig()

const configDirectoryPath = path.join(__dirname, '../config')

function applyConfigOptions (configOps) {
  for (const configOp in configOps) {
    const value = configOps[configOp]
    config.set(configOp, value)
  }
}

module.exports.load = async (configOps) => {
  if (configOps) applyConfigOptions(configOps)
  configUtil.load({ config, path: configDirectoryPath })
}
