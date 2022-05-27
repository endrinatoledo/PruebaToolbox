const filesController = require('../controllers/filesController')

const router = require('express').Router()

router.get('/list/', filesController.getAllFiles)  
router.get('/data/:filename', filesController.getFileByName)  

module.exports = router