const express = require('express')
const router = express.Router()

logmiddelware = require('../controllers/Middlewares/logs/userLog')

const controller = require ('../controllers/mainController')
//const adminMiddelware = require('../middelwares/admin')

router.get('/',  controller.index)
//router.get('/admin', controller.admin)

module.exports = router