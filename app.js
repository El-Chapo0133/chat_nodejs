let status = require('./modules/status.js')
let port = require('./modules/port.js')

let fs = require('fs')
let app = require('http').createServer(handler)
let io = require('socket.io')(app)

io.on('connection', (socket) => {
    socket.on('send', (data) => {
        socket.broadcast.emit("getMessage", data.data)
    })
})

function handler(request, response) {
    fs.readFile(__dirname + "/views/main.html", (err, data) => {
        if (err) {
            response.writeHead(status.NotFound())
            response.write("arg, error on loading html page")
            response.end()
        }
        response.writeHead(status.OK(), { "Content-Type": "text/html" })
        response.write(data)
        response.end()
    })
}

app.listen(port.Port, (err) => {
    if (err) {
        console.log("arg, errors!")
        console.log(err)
        throw(err)
    } else {
        console.log("server lunched on port :" + port.Port)
    }
})