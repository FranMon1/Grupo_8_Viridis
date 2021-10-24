const express = require('express');
const path= require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');

/* Config of multer */

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    let products = path.join(__dirname, '../../public/images/products')
        cb(null, products)

    },
    filename: function (req, file, callback) {
        let newProductName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null, newProductName)
    }
})

const uploadProductImg = multer({ storage });


//-------------------------- Rutas


router.get('/product', productsController.product);
router.get('/cart', productsController.cart);
router.get('/detail', productsController.detail);

// Creación 
router.get('/create', productsController.create);
router.post('/create',uploadProductImg.single('productimg'), productsController.store);


// Edición
router.get ('/edit/:id', productsController.edit);
router.put ('/edit/:id', productsController.update);


// Inventario
router.get ('/inventory', productsController.inventory);
router.delete ('/inventory/:id', productsController.delete);



module.exports = router;

