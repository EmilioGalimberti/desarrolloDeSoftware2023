// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");



// ************ Controller Require ************
const productsController = require('../controllers/productsController');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../../public/images/products"));
    },
    filename: function (req, file, cb){ 
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`
        )
    }
})

const uploadFile =multer({ storage});
let validateRegister = [ body('name').notEmpty().withMessage("El nombre es obligatorio"), 
                    body('price').notEmpty().withMessage("Campo obligatorio")]
                 
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/',  uploadFile.single("image"), validateRegister,  productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
