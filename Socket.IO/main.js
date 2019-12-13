let io = require('socket.io')(global.app);
let mongo = require("../mongodb/main.js");

io.on("connect", (socket) => {
	console.log(socket)
    socket.on('send', (data) => {
    	var user;
    	var toSend = {
    		data: data.data;
    		user: user
    	}
        socket.broadcast.emit("getMessage", toSend);
    })
})

module.exports = io;