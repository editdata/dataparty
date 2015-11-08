var h = require('virtual-dom/h')
var loop = require('virtual-raf')

var store = require('./lib/store')
var actions = require('./lib/actions')
var router = require('./lib/router')

var app = require('./elements/app')(h)
var header = require('./elements/header')(h)

var screens = {
  landing: require('./elements/landing')(h),
  about: require('./elements/about')(h),
  dataset: require('./elements/dataset')(h)
}

router.start()

function render (state) {
  console.log('%c render state: ', 'background-color:black; color:white;', state)

  return app.render([
    header.render(state),
    screens[state.screen].render(state)
  ])
}

router.on('/', function (params) {
  actions.setScreen('landing', params)
  if (!tree) init()
})

router.on('/dataset/:dataset', function (params) {
  actions.setScreen('dataset', params)
  if (!tree) init()
})

router.on('/about', function (params) {
  actions.setScreen('about', params)
  if (!tree) init()
})

var tree
function init () {
  var state = store.getState()

  if (!state.screen) {
    state.screen = 'landing'
  }

  tree = loop(state, render, require('virtual-dom'))
  document.body.appendChild(tree())

  store.subscribe(function () {
    var state = store.getState()
    tree.update(state)
  })

  return tree
}
