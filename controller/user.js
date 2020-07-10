const usermodel = require('../model/user')
const bcrypt = require('bcrypt')

exports.register = (data) =>
  new Promise((resolve, reject) => {
    usermodel.findOne({
      npm: data.npm
    }).then(user => {
      if (user) {
        reject({
          sukses: false,
          pesan: 'NPM Sudah Terdaftar'
        })
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          usermodel.create(data)
            .then(() => {
              resolve({
                sukses: true,
                pesan: 'berhasil registrasi'
              })
            }).catch(() => { 
              reject({
                sukses: false,
                pesan: 'gagal registrasi'
              })
            })
        })
      }
    })
  })

  exports.login = (data) => 
  new Promise((resolve, reject) => {
try {
  usermodel.findOne({
    npm: data.npm
  }).then((user) => {
    if (user) {
        if (bcrypt.compareSync(data.password, user.password)) {
          resolve({
            sukses: true,
            pesan: 'Berhasil Login',
            data: user
          })
        } else {
          reject({
            sukses: false,
            pesan: 'Password Salah'
          })     
        }
    } else {
      reject({
        sukses: false,
        pesan: 'NPM Tidak Terdaftar'
      })
    }
  })
} catch (error) {
  console.log(error)
}
  })