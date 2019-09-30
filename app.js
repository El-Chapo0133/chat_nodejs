let port = require('./modules/port.js')
let status = require('./modules/status.js')

let express = require('express')
let app = express()

app.use(express.static(__dirname + "/views/"))

app.get('/', (request, response) => {
    response.writeHead(status.OK(), { "Content-Type": "text/html" })
    va
    response.write("<h1>Hello</h1>")
    response.end()
}).listen(port.getPort, (err) => {
    if (err) {
        console.log("arg, errors!")
        console.log(err)
        throw(err)
    } else {
        console.log("server lunched on port :" + port.Port)
    }
})