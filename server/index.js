/*
* When you clone this repository to do development on the project and
* run `npm start`, this is the file that gets run.

* This file also serves as an example of how you can use the app as a dependency
* in another project. This is useful in production so you can install
* the app using npm, and pull in the latest version of the app using npm
* instead of manually pulling and merging changes via git.
*/

module.exports = Township

function Township () {
  var level = require('level')
  var db = level(__dirname + '/db')
  var createAccounts = require('accounts-api')()
  var accounts = createAccounts({ db: db })

  var http = require('http')
  var appa = require('appa')({
    url: 'http://localhost:3333',
    apps: [accounts],
    preRendered: true
  })

  var cb = function () {
    console.log('server listening at http://localhost:' + appa.url.port)
  }
  var httpServer = http.createServer(appa)

  httpServer.listen = httpServer.listen.bind(httpServer, appa.url.port, cb)

  return httpServer

}
