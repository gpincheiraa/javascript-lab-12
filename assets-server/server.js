const express = require('express')
const path = require('path')

const app = express()
const wait = (waitTime) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, waitTime)
})

app.use(express.json())

app.get('/assets/main.css', async (req, res) => {
  await wait(10000)

  res.sendFile(
    path.resolve(__dirname, 'assets/main.css')
  )
})

app.get('/assets/main.js', async (req, res) => {
  await wait(0)

  res.sendFile(
    path.resolve(__dirname, 'assets/main.js')
  )
})

app.listen(3000, () => {
  console.log('Assets server ready')
})
