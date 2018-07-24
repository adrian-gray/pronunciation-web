const express = require('express')
const path = require('path')
const compression = require('compression')

const PORT = 9000

const server = express()
server.use(compression())

server.use('/assets', express.static(path.join(__dirname, 'dist/assets/')))

server.get('/bundle.js', (req, res) => {
  const file = path.join(__dirname, 'dist', 'bundle.js')
  console.log('serving: ', file)
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'))
})

server.get('/styles.css', (req, res) => {
  const file = path.join(__dirname, 'dist', 'styles.css')
  console.log('serving: ', file)
  res.sendFile(path.join(__dirname, 'dist', 'styles.css'))
})

server.get('*', (req, res) => {
  const file = path.join(__dirname, 'dist', 'index.html')
  console.log('serving: ', file)
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

console.log(`listening on port ${PORT}`)
server.listen(PORT)
