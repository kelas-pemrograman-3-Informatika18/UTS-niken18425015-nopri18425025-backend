const router = require('express').Router()
const adminController = require('../controller/admin')
router.post('/registeradmin', (req, res) => {
  adminController.registeradmin(req.body)
    .then(result => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  })

router.post('/loginadmin', (req, res) => {
  adminController.loginadmin(req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

module.exports = router