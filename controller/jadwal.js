const jadwalModel = require('../model/jadwal')
const objectId = require('mongoose').Types.ObjectId

exports.simpanJadwal = (data) =>
new Promise((resolve, reject) => {
  jadwalModel.create(data)
  .then(() => {
    resolve({
      sukses: true,
      pesan: 'Berhasil Input Data'
    })
  }).catch(() => {
    reject({
      sukses: false,
      pesan: 'Gagal Input Data'
    })
  })
})

exports.tampiljadwal = () =>
  new Promise((resolve, reject) => {
    jadwalModel.find()
      .then(data => {
        resolve({
          sukses: true,
          pesan: 'Berhasil memuat data',
          data: data
        })
  }).catch(data => {
    reject({
      sukses: false,
      pesan: 'Gagal Memuat Data',
      data: []
    })
  })
})

exports.edit = (data, kode) =>
new Promise((resolve, reject) => {
  jadwalModel.updateOne({
       kode: kode
    }, data).then(() => {
    resolve({
      sukses: true,
      pesan: 'Berhasil mengubah data'
    })
  }).catch(() => {
    reject({
      sukses: false,
      pesan: 'Gagal Mengubah Data'
    })
  })
})

exports.tampilSatudata = (kode) =>
new Promise((resolve, reject) => {
  jadwalModel.findOne({
    kode: kode
  }).then((data) => {
    resolve({
      sukses: true,
      pesan: 'Berhasil Tampil',
      data: data
    })
  }).catch(() => reject ({
    sukses: false,
    pesan: 'Gagal Memuat Data'
  }))
})

exports.delete = (kode) =>
new Promise((resolve, reject) => {
  jadwalModel.deleteOne({
    kode: kode
  }).then(() => {
    resolve({
      sukses: true,
      pesan: 'Berhasil Menghapus Data'
      })
    }).catch(() => {
      reject({
        sukses: false,
        pesan: 'Gagal Menghapus Data'  
    })
  })
})
