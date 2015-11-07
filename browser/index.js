var h = require('virtual-dom/h')
var loop = require('virtual-raf')
var store = require('./lib/store')
var actions = require('./lib/actions')
var router = require('./lib/router')

var app = require('./elements/app')(h)
var header = require('./elements/header')(h)

var screens = {
  landing: require('./elements/landing')(h),
  about: require('./elements/about')(h)
}

function render (state) {
  console.log('%c render state: ', 'background-color:black; color:white;', state)

  return app.render([
    header.render(state),
    screens[state.screen].render(state)
  ])
}

store.subscribe(function () {
  var state = store.getState()
  tree.update(state)
})

router.on('/', function (params) {
  actions.setScreen('landing')
})

router.on('/dataset/:dataset', function (params) {})

router.on('/dataset/:dataset/map', function (params) {})

router.on('/dataset/:dataset/grid', function (params) {})

router.on('/about', function (params) {
  actions.setScreen('about')
})

var tree = loop(store.getState(), render, require('virtual-dom'))
document.body.appendChild(tree())

router.start()
