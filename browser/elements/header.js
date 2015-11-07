var emitter = require('component-emitter')

module.exports = function (h) {
  var header = {}
  emitter(header)

  header.render = function header_render (state) {
    var title = h('h1.site-title', state.site.title)

    var logo = h('img.site-logo-image', {
      src: '/assets/dataparty.png'
    })

    return h('header.site-header', [
      h('a.site-logo', { href: '/' }, [
        logo,
        title
      ]),
      h('ul.site-nav', [
        h('li.nav-item', [
          h('a', { href: '/about' }, 'about')
        ])
      ])
    ])
  }

  return header
}
