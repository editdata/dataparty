var extend = require('extend')

var config = {
  shared: {
    site: {
      title: 'DataParty',
      url: 'http://localhost:3333'
    }
  },
  production: {},
  development: {}
}

module.exports = extend(config.shared, config[process.env.NODE_ENV])
