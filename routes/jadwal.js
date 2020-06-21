const router = require('express').Router()
const jadwalController = require('../controller/jadwal')

router.post('/input',(req, res) => {
  jadwalController.simpanJadwal(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil',(req, res) => {
  jadwalController.tampiljadwal()
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.put('/edit/:kode',(req, res) => {
  jadwalController.edit(req.body, req.params.kode)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/tampilsingle/:kode',(req, res) => {
  jadwalController.tampilSatudata(req.params.kode)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.delete('/delete/:kode', (req, res) => {
  jadwalController.delete(req.params.kode)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

module.exports = router