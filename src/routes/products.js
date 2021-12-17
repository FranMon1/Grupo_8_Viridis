const express = require('express');
const path= require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const adminMw = require('../middlewares/adminMw.js');
const validationsCreate = require("../middlewares/validationsProductMw.js")
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

router.get('/', productsController.index)


// Detalle de producto
router.get('/product/:id', productsController.product);
router.delete('/product/:id', productsController.delete);

router.get('/cart', productsController.cart);
router.get('/detail', productsController.detail);

// Creación 
router.get('/create',adminMw, productsController.create);
router.post('/create',uploadProductImg.single('image'),validationsCreate, productsController.store);


// Edición
router.get ('/edit/:id', adminMw, productsController.edit);
router.put ('/edit/:id',uploadProductImg.single('productimg'), productsController.update);


// Inventario
router.get ('/inventory',adminMw, productsController.inventory);
router.delete ('/inventory/:id', productsController.delete);
router.get("/inventory/search", productsController.search)



module.exports = router;

