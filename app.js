let status = require('./modules/status.js');
let port = require('./modules/port.js');
let ip = require('./modules/ip.js');
let getIp = require('./modules/getIp.js');

let fs = require('fs');
let app = require('http').createServer(handler);
global.app = app // for socket.io => ./Socket.IO/main.js
let io = require('./Socket.IO/main.js');

function handler(request, response) {
    // maybe use request.headers to get user ip
    console.log(request.headers);
    fs.readFile(__dirname + "/views/main.html", (err, data) => {
        if (err) {
            response.writeHead(status.NotFound());
            response.write("arg, error on loading html page");
            response.end();
        }
        response.writeHead(status.OK(), { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })
}

app.listen(port.Port, ip.IP, (err) => {
    console.log(getIp.Ip);
    if (err) {
        console.log("arg, errors!");
        console.log(err);
        throw(err)
    } else {
        console.log("server lunched on port :" + port.Port);
    }
})