// core
const fs = require('fs')
const http = require('http')

// npm
const express = require('express')

// setup
fs.writeFileSync('out.txt', 'Hello, World!\n', 'utf8')
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  fs.readFile('out.txt', 'utf8', (err, data) => {
    res.send(data)
  })
})

// server
const server = http.createServer()
server.on('request', app)
server.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})
