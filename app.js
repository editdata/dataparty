var app = require('./server/index')()

var socketio = require('socket.io')(app);

var fs = require('fs');

var server = {}
var realtime = require('./server/lib/realtime-editing')(socketio, server)

app.listen()
