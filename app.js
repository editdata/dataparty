var level = require('level')
var db = level(__dirname + '/db')

var config = require('./config')
var app = require('./server')(db, config)
var socketio = require('socket.io')(app)
require('./server/realtime-editing')(socketio, app)

app.listen()
