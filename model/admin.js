const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('admin', AdminSchema)
