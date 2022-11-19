// @ts-check

const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end("Hello!")
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server listening at port: ${PORT}...`)
})
