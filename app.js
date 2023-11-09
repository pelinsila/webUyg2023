const express = require('express')
const db_connect=require('./db/mysql_connect')
const app = express()
require('dotenv/config')
app.get('/', function (req, res) {
  res.send('Anasayfa')
})
app.get('/app', function (req, res) {
    res.send('app sayfası')
  })

app.listen(process.env.PORT)