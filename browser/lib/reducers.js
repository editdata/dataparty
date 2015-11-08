var extend = require('xtend')

var reducers = {
  create_row: function (state, action) {
    // todo
  },
  create_property: function (state, action) {
    // todo
  },
  new_dataset: function (state, action) {
    return extend(state, { dataset: action.dataset })
  },
  set_url: function (state, action) {
    return extend(state, { url: action.params })
  },
  set_screen: function (state, action) {
    if (state.screen !== action.screen) {
      return extend(state, { screen: action.screen })
    } else {
      return state
    }
  },
  error: function (state, action) {
    return extend(state, { error: action.error })
  }
}

module.exports = function (state, action) {
  if (action.type.indexOf('@@redux') > -1) return state
  console.log('%c action: ', 'background-color:#efefef; color:#222;', action.type, action)
  var newState = reducers[action.type](state, action)
  return newState
}
