var emitter = require('component-emitter')

module.exports = function (h) {
  var about = {}
  emitter(about)

  about.render = function about_render (state) {
    return h('.wrapper', [
      h('h1.page-title', 'about')
    ])
  }

  return about
}
