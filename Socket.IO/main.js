let io = require('socket.io')(global.app)

io.on("connect", (socket) => {
    socket.on('send', (data) => {
        socket.broadcast.emit("getMessage", data.data)
    })
})

module.exports = io