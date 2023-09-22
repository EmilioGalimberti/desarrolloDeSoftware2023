// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 
router.get('/products/detail', productsController.detail); 
module.exports = router;
