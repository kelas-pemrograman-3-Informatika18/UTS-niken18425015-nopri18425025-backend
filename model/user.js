const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String
  },
  npm: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  level: {
    type: Number,
    default: 2
  }
})

module.exports = mongoose.model('user', UserSchema)
