var extend = require('extend')

var config = {
  shared: {
    site: {
      title: 'DataParty'
    }
  },
  production: {},
  development: {}
}

module.exports = extend(config.shared, config[process.env.NODE_ENV])
