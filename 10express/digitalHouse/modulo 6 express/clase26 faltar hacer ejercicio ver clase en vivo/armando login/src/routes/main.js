// ************ Require's ************
const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();



// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 

router.get('/login',  mainController.login)
router.post('/login',[
    check ('user').isLength({min:3}).withMessage('Debe ingresar un nombre'),
    check ('email').isEmail().withMessage('Debe ingresar un email valido'),
    check ('color').isLength({min:1}).withMessage('Debe seleccionar un color'),
    body('age').custom(value =>{
        if(isNaN(value)){
            throw new Error('El valor ingresado de ser un numero')
        }
        else {
            return true;
        }
        
    })
],  
mainController.store)

module.exports = router;
