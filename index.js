const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
}),
app.get('/twitter', (req, res) => {
    res.send('Im backend developer')
  }),
  app.get('/youtube', (req, res)=>{
   res.send('<h2>Chai r code<h2>')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})