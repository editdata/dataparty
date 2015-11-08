var createPopup = require('popup-element')
var actions = require('../lib/actions')

module.exports = function (h) {
  var popup = createPopup(h)

  popup.on('close', function () {
    actions.removePopup()
  })

  var name = ''
  return popup.open([
    h('h1', 'Create a new column'),
    h('h2', 'Choose the name of the column:'),
    h('input', {
      oninput: function (e) {
        name = e.target.value
      }
    }),
    h('button.submit-form', {
      onclick: function (e) {
        actions.createProperty({ name: name })
        actions.removePopup()
      }
    }, 'Create column')
  ])
}
