var createStore = require('redux').createStore
var extend = require('xtend')
var reducers = require('./reducers')
var config = require('../../config')

var initialState = extend(config, {
  screen: null,
  dataset: null,
  activeRow: null,
  url: {}
})

module.exports = createStore(reducers, initialState)
