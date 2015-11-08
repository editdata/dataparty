var emitter = require('component-emitter')
var actions = require('../lib/actions')

module.exports = function (h) {
  var landing = {}
  emitter(landing)

  landing.render = function landing_render (state) {
    return h('.wrapper', [
      h('h1.page-title', 'Welcome to the party. The data party.'),
      h('button.start-dataparty', {
        onclick: function (e) {
          actions.newDataset()
        }
      }, 'Start a party!')
    ])
  }

  return landing
}
