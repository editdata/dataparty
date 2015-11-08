var emitter = require('component-emitter')
var actions = require('../lib/actions')

module.exports = function createMenu (h) {
  var menu = {}
  emitter(menu)

  menu.render = function menu_render (state) {
    return h('ul.menu', [
      h('li.menu-item', {
        onclick: function () {
          actions.createRow()
        }
      }, [h('button', [h('i.fa.fa-plus'), ' new row'])]),
      h('li.menu-item', {
        onclick: function () {
          actions.createProperty()
        }
      }, [h('button', [h('i.fa.fa-plus'), ' new column'])])
    ])
  }

  return menu
}
