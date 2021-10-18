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


// Rutas


router.get('/product', productsController.product);
router.get('/cart', productsController.cart);
router.get('/detail', productsController.detail);

router.get('/create', productsController.create);
router.post('/create',uploadProductImg.single('productimg'), productsController.store);

router.get ('/inventory', productsController.inventory);
router.get ('/edit', productsController.edit);



module.exports = router;

