const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors(), bodyParser.json())

app.get('/', (req, res) => {
  const greeting = 'Holi UwU'

  res.send(greeting)
})

app.get('/random', (req, res) => {
  const message = ({
    0: 'Pera',
    1: 'Manzana',
    2: 'Sandía',
    3: 'Plátano',
    4: 'Guayaba',
    5: 'Si eres Narvaez, huevos'
  })[Math.round(Math.random() * 5)]
  res.send(message)
})

const list = []
app.get('/list', (req, res) => {
  res.send(list)
})
app.post('/add-item', (req, res) => {
  const {item} = req.body
  if (item) {
    list.push(item)
    res.send({success: true})
  } else res.send({success: false})
})

app.get('/message/:name', (req, res) => {
  const name = req.params.name ?? 'anónimo'
  const message = `Hola ${name}!`

  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})