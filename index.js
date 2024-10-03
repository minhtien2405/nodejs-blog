const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => res.send('Hello World! This is a simple express app.'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})