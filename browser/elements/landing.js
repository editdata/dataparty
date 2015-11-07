var emitter = require('component-emitter')

module.exports = function (h) {
  var landing = {}
  emitter(landing)

  landing.render = function landing_render (state) {
    return h('.wrapper', [
      h('h1.page-title', 'Welcome to the party. The data party.')
    ])
  }

  return landing
}
