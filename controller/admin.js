const adminmodel = require('../model/admin')
const bcrypt = require('bcrypt')

exports.registeradmin = (data) =>
  new Promise((resolve, reject) => {
    adminmodel.findOne({
      username: data.username
    }).then(admin => {
      if (admin) {
        reject({
          sukses: false,
          pesan: 'Username Sudah Terdaftar'
        })
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          adminmodel.create(data)
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

  exports.loginadmin = (data) => 
  new Promise((resolve, reject) => {
    adminmodel.findOne({
      username: data.username
    }).then((admin) => {
      if (admin) {
          if (bcrypt.compareSync(data.password, admin.password)) {
            resolve({
              sukses: true,
              pesan: 'Berhasil Login',
              data: admin
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
          pesan: 'Username Tidak Terdaftar'
        })
      }
    })
  })