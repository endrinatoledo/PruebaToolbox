const filesController = require('../controllers/filesController')

const router = require('express').Router()

router.get('/', filesController.getAllFiles)  

module.exports = router