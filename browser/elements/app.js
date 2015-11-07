module.exports = function (h) {
  var app = {}

  app.render = function app_render (elements) {
    return h('#app', elements)
  }

  return app
}
