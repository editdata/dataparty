var extend = require('xtend')

var reducers = {
  error: function (state, action) {
    return extend(state, { error: action.error })
  }
}

module.exports = function (state, action) {
  if (action.type.indexOf('@@redux') > -1) return state
  var newState = reducers[action.type](state, action)
  return newState
}
