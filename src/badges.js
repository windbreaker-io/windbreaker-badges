const ghBadges = require('gh-badges')

function badge (options) {
  return new Promise((resolve, reject) => {
    ghBadges(options, (res, err) => {
      return err ? reject(err) : resolve(res)
    })
  })
}

const defaultBadgeOptions = {
  format: 'svg',
  template: 'flat'
}

const badgeNameToBadgeMap = {
  enabled: {
    colorscheme: 'brightgreen',
    text: ['Windbreaker', 'enabled']
  }
}

exports.create = async function () {
  for (const badgeName in badgeNameToBadgeMap) {
    const badgeOptions = Object.assign(
      defaultBadgeOptions,
      badgeNameToBadgeMap[badgeName])
    exports[badgeName] = await badge(badgeOptions)
  }
}
