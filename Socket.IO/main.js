const struct_user = {
	"_id",
	"name",
	"surname",
	"ip"
}

let io = require('socket.io')(global.app);
let mongo = require("../mongodb/main.js");

var myDB = new mongo();

io.on("connect", (socket) => {
	console.log(socket)
    socket.on('send', (data) => {
    	var user;
    	var toSend = {
    		data: data.data,
    		user: user
    	}
        socket.broadcast.emit("getMessage", toSend);
    });
    socket.on("login", (data) => {
    	var new_user = new struct_user {
    		"_id": 0,
    		"name": data.name,
    		
    	}
    });
});

module.exports = io;