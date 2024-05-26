const express = require('express')
const app = express()
const reqmiddleware = require("./middleware")
const route = express.Router()
// Middleware
route.use(reqmiddleware)
// app.use(reqmiddleware)
// route level middlware
// route group level
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('this is about!')
  })

  route.get('/contact', (req, res) => {
    res.send('this is contact!')
  })

app.use('/',route)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})