var history = require('history-state')({ pushState: true })
var catchLinks = require('catch-links')
var match = require('pathname-match')
var wayfarer = require('wayfarer')('/')
var qs = require('query-string')
var extend = require('xtend')
var actions = require('./actions')
var router = {}

router.on = function (route, callback) {
  wayfarer.on(route, function (params) {
    console.log('getting called?', route)
    params = extend(params, window.location)
    params.query = qs.parse(window.location.search)
    actions.setUrl(params)
    callback(params)
  })
}

router.go = function (route) {
  history.change(route)
}

router.start = function () {
  history.start()
}

history.on('change', function () {
  wayfarer(match(window.location.pathname))
})

catchLinks(window, function (href) {
  console.log('caught it', href)
  router.go(href)
})

module.exports = router
