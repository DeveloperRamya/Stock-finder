const data = require ('./data.json')
const express = require('express')
const cors =require('cors')

const app = express()
app.use(cors())
app.use(express.static('STOCKSAPI'))
app.get('/',(req,res) => {
  res.send("Hello World")
})
app.get('/api/getstockdata',(req,res) => {
  res.send(data)
})
app.post('/api/getstocks',(req,res) => {
  res.send(data)
})
app.listen(5000, err => {
  if(err) console.log(err)
  console.log(`Server started at port 5000`)
})