var store = require('./store')
var actions = {}

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
* Set screen of application.
* @name actions.setScreen
* @example
* actions.setScreen('map')
*/
actions.setScreen = function actions_setUrl (screen) {
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
