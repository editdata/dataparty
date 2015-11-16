var cuid = require('cuid')
var store = require('./store')
var router = require('./router')
var actions = {}

var io = require('socket.io-client');
console.log("store.getState().site.url:", store.getState().site.url)
actions.socket = io(store.getState().site.url);
console.log("actions.socket:", actions.socket)

/**
* Set active row.
* @name actions.setActiveRow
* @example
* actions.setActiveRow({
*   el: {}, // src dom target
*   data: {} // row object
* })
*/
actions.setActiveRow = function actions_setActiveRow (el, row) {
  store.dispatch({ type: 'set_active_row', row: { el: el, data: row } })
}

/**
* Remove active row.
* @name actions.removeActiveRow
* @example
* actions.removeActiveRow()
*/
actions.removeActiveRow = function actions_removeActiveRow () {
  store.dispatch({ type: 'remove_active_row' })
}

/**
* Create a popup
* @name actions.createPopup
* @example
* actions.createPopup()
*/
actions.createPopup = function actions_createPopup (popup) {
  store.dispatch({ type: 'create_popup', popup: popup })
}

/**
* Remove a popup
* @name actions.createPopup
* @example
* actions.createPopup()
*/
actions.removePopup = function actions_removePopup () {
  store.dispatch({ type: 'remove_popup' })
}

/**
* Create a new row in a dataset
* @name actions.createRow
* @example
* actions.createRow()
*/
actions.createRow = function actions_createRow () {
  store.dispatch({ type: 'create_row' })
}

/**
* Create a new property in a dataset
* @name actions.createProperty
* @example
* actions.createProperty()
*/
actions.createProperty = function actions_createProperty (property) {
  store.dispatch({ type: 'create_property', property: property })
}

/**
* Redirect url to specified path.
* @name actions.newDataset
* @example
* actions.newDataset()
*/
actions.newDataset = function actions_newDataset () {
  var dataset = {
    key: cuid(),
    metadata: {},
    properties: {},
    data: []
  }

  store.dispatch({ type: 'new_dataset', dataset: dataset })
  router.go('/dataset/' + dataset.key)
  actions.socket.emit('room', { hello: 'world'})
}

/**
* Redirect url to specified path.
* @name actions.setUrl
* @example
* actions.setUrl(params)
*/
actions.setUrl = function actions_setUrl (params) {
  store.dispatch({ type: 'set_url', params: params })
}

/**
* Set screen of application. Meant to be used inside of route handlers.
* @name actions.setScreen
* @param {String} screen
* @param {Object} params
* @example
* actions.setScreen('map', params)
*/
actions.setScreen = function actions_setScreen (screen, params) {
  actions.setUrl(params)
  store.dispatch({ type: 'set_screen', screen: screen })
}

/**
* Log error and set error state so renderer can show error notification
* @name actions.error
* @example
* actions.error(new Error('something bad happened'))
*/
actions.error = function actions_error (error) {
  store.dispatch({ type: 'error', error: error })
}

module.exports = actions
