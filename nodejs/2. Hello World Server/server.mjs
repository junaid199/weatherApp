import express from 'express'
const app = express()
const port = 3000

app.get('/water', (req, res) => {
    
  res.send('Hello World! Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})