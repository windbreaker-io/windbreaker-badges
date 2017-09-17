const test = require('ava')
const sinon = require('sinon')
const badges = require('~/src/badges')

const badgeNameToBadgeMap = badges.getBadgeNameToBadgeMap()

test.beforeEach((t) => {
  const sandbox = sinon.sandbox.create()
  t.context = { sandbox }
})

test.afterEach((t) => {
  const { sandbox } = t.context

  // Clear the exported data
  for (const badgeName in badgeNameToBadgeMap) {
    delete badges[badgeName]
  }

  sandbox.restore()
})

test.serial('should have expected badge name to badge map', (t) => {
  t.deepEqual(badgeNameToBadgeMap, {
    enabled: {
      colorscheme: 'brightgreen',
      text: ['Windbreaker', 'enabled']
    },
    disabled: {
      colorscheme: 'lightred',
      text: ['Windbreaker', 'disabled']
    },
    notFound: {
      colorscheme: 'lightgray',
      text: ['Windbreaker', 'not found']
    }
  })
})

test.serial('should create badges map', async (t) => {
  await badges.create()

  for (const badgeName in badgeNameToBadgeMap) {
    const badge = badges[badgeName]
    const texts = badgeNameToBadgeMap[badgeName].text

    texts.forEach((text) => {
      t.is(badge.includes(text), true)
    })
  }
})
