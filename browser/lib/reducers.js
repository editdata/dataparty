var extend = require('xtend')

var reducers = {
  set_url: function (state, action) {
    return extend(state, { url: action.params })
  },
  set_screen: function (state, action) {
    return extend(state, { screen: action.screen })
  },
  error: function (state, action) {
    return extend(state, { error: action.error })
  }
}

module.exports = function (state, action) {
  if (action.type.indexOf('@@redux') > -1) return state
  var newState = reducers[action.type](state, action)
  return newState
}
