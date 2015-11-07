var config = {
  production: {},
  development: {}
}

module.exports = config[process.env.NODE_ENV]
