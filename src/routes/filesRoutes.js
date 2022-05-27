const filesController = require('../controllers/filesController')

const router = require('express').Router()

router.get('/', filesController.getAllFiles)  
router.get('/:filename', filesController.getFileByName)  

module.exports = router