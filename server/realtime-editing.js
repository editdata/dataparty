var extend = require('xtend')

module.exports = function (io, server) {
  var rooms = {}

  io.on('connection', function (socket) {
    /**
    * `room` is the unique identifier of a dataset
    */
    socket.on('room', function (room) {
      socket.join(room)
      if (!rooms[room]) rooms[room] = { users: {} }

      socket.on('user', function (user) {
        if (!rooms[room].users[socket.id]) {
          rooms[room].users[socket.id] = user
        }
        io.to(room).emit('users:update', rooms[room].users)
      })

      // get the dataset from the `room` variable

      // track all the changes to the dataset
      // - modify the dataset
      // - log the change to a dataset log db

      socket.on('disconnect', function () {
        io.to(room).emit('blur') // should probably emit the row & value keys
        delete rooms[room].users[socket.id]
        io.to(room).emit('users:update', rooms[room].users)
      })
    })
  })
}
