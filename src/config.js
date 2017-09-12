const configUtil = require('windbreaker-service-util/config')
const path = require('path')

const BadgesServiceConfig = require('~/src/models/BadgesServiceConfig')
const config = module.exports = new BadgesServiceConfig()

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
