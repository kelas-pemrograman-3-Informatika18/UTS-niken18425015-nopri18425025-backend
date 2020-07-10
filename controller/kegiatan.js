const KegiatanModel = require('../model/kegiatan')

exports.simpanKegiatan = (data) =>
new Promise((resolve, reject) => {
  KegiatanModel.create(data)
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

exports.tampilKegiatan = () =>
  new Promise((resolve, reject) => {
    KegiatanModel.find()
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

exports.delete = (kode) =>
new Promise((resolve, reject) => {
  KegiatanModel.deleteOne({
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


