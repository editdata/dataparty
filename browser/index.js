var h = require('virtual-dom/h')
var loop = require('virtual-raf')
var store = require('./store')
var actions = require('./actions')()

store.subscribe(function () {
  var state = store.getState()
  tree.update(state)
})

function render (state) {
  return h('#app', 'testing')
}

var tree = loop(store.getState(), render, require('virtual-dom'))
document.body.appendChild(tree())

render(store.getState())
