var emitter = require('component-emitter')
var editor = require('data-editor')()
var grid = require('data-grid')()
var form = require('data-form')()
var map = require('data-map')({
  zoom: 12,
  center: [47.621958, -122.33636]
})

var actions = require('../lib/actions')

module.exports = function (h) {
  var dataset = {}
  emitter(dataset)
  var menu = require('./menu')(h)

  grid.on('click', function (e, row) {
    actions.setActiveRow(e.target, row)
  })

  form.on('close', function () {
    actions.removeActiveRow()
  })

  form.on('update', function (e, a, b, c) {
    console.log(e, a, b, c)
  })

  dataset.render = function dataset_render (state) {
    if (!state.dataset) {
      state.dataset = {
        key: null,
        metadata: {},
        properties: {},
        data: []
      }
    }

    var wrapper = 'div.view-wrapper' + (state.activeRow ? '.card-open' : '.card-closed')
    var gridTree = state.dataset.data ? grid.render(state.dataset) : null

    return h(wrapper, [
      menu.render(state),
      gridTree,
      form.render(state)
    ])
  }

  return dataset
}
