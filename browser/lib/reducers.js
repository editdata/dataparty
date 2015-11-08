var extend = require('xtend')
var clone = require('clone')
var editor = require('data-editor')()

var reducers = {
  create_row: function (state, action) {
    var dataset = editor.rows.create(state.dataset, {})
    return extend(state, { dataset: dataset })
  },
  create_property: function (state, action) {
    console.log(state.dataset)
    var dataset = editor.properties.create(state.dataset, action.property)
    return extend(state, { dataset: dataset })
  },
  create_popup: function (state, action) {
    return extend(state, { popup: action.popup })
  },
  remove_popup: function (state, action) {
    state.popup = null
    return clone(state)
  },
  new_dataset: function (state, action) {
    var dataset = editor.format(action.dataset)
    return extend(state, { dataset: dataset })
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
