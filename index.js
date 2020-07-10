const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/jadwalproject'
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('berhasil connect ke database')
}).catch((err) => {
  console.log('gagal connect ke database')
})
app.use(cors())

app.use(bodyParser.json({
  extend: true,
  limit: '20mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))
// list route
app.use('/user', require('./routes/user'))
app.use('/jadwal', require('./routes/jadwal'))
app.use('/kegiatan', require('./routes/kegiatan'))

app.listen(5001, function () {
  console.log('Server dimulai pada port 5001')
})
