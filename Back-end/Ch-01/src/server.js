const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end("Hello world!")
})

const PORT = 3000

server.listen(PORT, () => {
    console.log('Server listening at', PORT)
})
