const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JadwalSchema = new Schema({
  kode: {
    type: String
  },
  matkul: {
    type: String
  },
  dosen: {
    type: String
  },
  waktu: {
    type: String
  },
  sks: {
    type: String
  },
  kelas: {
    type: String
  }
})

module.exports = mongoose.model('jadwal', JadwalSchema)
