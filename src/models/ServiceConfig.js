const BaseConfig = require('windbreaker-service-util/models/BaseServiceConfig')
const DefaultsMixin = require('fashion-model-defaults')
const RedisClusterNodeConfig = require('windbreaker-service-util/models/cache/RedisClusterNodeConfig')
const KnexConfig = require('windbreaker-service-util/models/dao/KnexConfig')

module.exports = BaseConfig.extend({
  mixins: [ DefaultsMixin ],

  properties: {
    httpServerPort: {
      description: 'Port to run the HTTP server port on',
      type: Number,
      default: 8080
    },
    amqUrl: {
      description: 'The url used to access activeMQ',
      default: 'amqp://127.0.0.1:5672'
    },
    knex: KnexConfig,
    redisClusterNodes: [RedisClusterNodeConfig]
  }
})
