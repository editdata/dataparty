var emitter = require('component-emitter')

module.exports = function createMenu (h) {
  var menu = {}
  emitter(menu)

  menu.render = function menu_render (state) {
    return h('ul.menu', [
      h('li.menu-item', [
        h('button', [
          h('i.fa.fa-plus'),
          ' new row'
        ])
      ]),
      h('li.menu-item', [
        h('button', [
          h('i.fa.fa-plus'),
          ' new column'
        ])
      ])
    ])
  }

  return menu
}
