const router = require('express').Router()
const KegiatanController = require('../controller/kegiatan')

router.post('/input',(req, res) => {
  KegiatanController.simpanKegiatan(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil',(req, res) => {
  KegiatanController.tampilKegiatan()
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.get('/tampilsingle/:kode',(req, res) => {
  KegiatanController.tampilKegiatansatu(req.params.kode)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.delete('/delete/:kode', (req, res) => {
  KegiatanController.delete(req.params.kode)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

module.exports = router