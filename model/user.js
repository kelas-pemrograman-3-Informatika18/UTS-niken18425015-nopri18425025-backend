const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String
  },
  npm: {
    type: String
  },
  prodi: {
    type: String
  },
  semester: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('user', UserSchema)
