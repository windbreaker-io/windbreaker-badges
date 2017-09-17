const badges = require('~/src/badges')

module.exports = {
  method: 'GET',
  path: '/:owner/:repo.svg',
  async handler (ctx) {
    // TODO: Check the database/cache for the actual status of this repo
    ctx.type = 'image/svg+xml'
    ctx.body = badges.enabled
  }
}
