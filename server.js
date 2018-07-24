const express = require('express')
const path = require('path')
const compression = require('compression')

const PORT = 9000

const server = express()
server.use(compression())

server.use('/assets', express.static(path.join(__dirname, 'dist/assets/')))

server.get('/bundle.js', (req, res) => {
  const file = path.join(__dirname, 'dist', 'bundle.js')
  res.sendFile(file)
})

server.get('/bundle.js.map', (req, res) => {
  const file = path.join(__dirname, 'dist', 'bundle.js.map')
  res.sendFile(file)
})

server.get('/styles.css', (req, res) => {
  const file = path.join(__dirname, 'dist', 'styles.css')
  res.sendFile(file)
})

server.get('*', (req, res) => {
  const file = path.join(__dirname, 'dist', 'index.html')
  res.sendFile(file)
})

console.log(`listening on port ${PORT}`)
server.listen(PORT)
