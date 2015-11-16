module.exports = function createServer (db, config) {
  var createAccounts = require('accounts-api')()
  var accounts = createAccounts({ db: db })

  var http = require('http')
  var appa = require('appa')({
    url: config.url,
    apps: [accounts],
    preRendered: true
  })

  return http.createServer(appa)
}
