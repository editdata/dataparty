var store = require('./store')

module.exports = function createActions () {
  var actions = {}

  actions.error = function actions_error (error) {
    store.dispatch({ type: 'error', error: error })
  }

  return actions
}
