var app = require('./server/index')()
var socketio = require('socket.io')(app)
var server = {}
require('./server/lib/realtime-editing')(socketio, server)
app.listen()
