const express = require('express')
const { Server } = require('http')
const app = express()

const server = require('http').createServer(app)
const { server } = require('socket.io')

const io = new Server(server)

app.get('/', (req, res) => {
  res.send('This is creative drawing tool app official server by Rishabh Kumar')
})

io.on('connection', (socket) => {
  console.log('user connected')
})
const port = process.env.PORT || 5000

server.listen(port, () =>
  console.log('server is running on http://localhost:5000')
)
