const express = require('express');
const path= require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const adminMw = require('../middlewares/adminMw.js');
const validationsCreate = require("../middlewares/validationsProductMw.js");
const validationsEdit = require("../middlewares/editProductMw.js");
const cors = require('cors');


// Validacion de Imagen

const { check } = require("express-validator")
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

const uploadProductImg = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
    });


//-------------------------- Rutas

router.get('/', productsController.index)


// Detalle de producto
router.get('/product/:id', productsController.product);
router.delete('/product/:id', productsController.delete);

router.get('/cart', productsController.cart);
router.get('/detail', productsController.detail);

// Creación 
router.get('/create',adminMw, productsController.create);
router.post('/create',uploadProductImg.single('image'), (req, res, next) => {
    const file = req.file;
    if(!file){
        const error = new Error("Por favor ingrese una imagen");
        error.httpStatusCode = 400;
        return next(error)
    } else {
        next();
    }
}, validationsCreate, productsController.store);
router.get("/preferences", adminMw, productsController.category)
router.post("/preferences", adminMw, productsController.categoryAdd)

// Edición
router.get ('/edit/:id', adminMw, productsController.edit);
router.put ('/edit/:id',uploadProductImg.single('image'), validationsEdit, productsController.update);


// Inventario
router.get ('/inventory',adminMw, productsController.inventory);
router.delete ('/inventory/:id', productsController.delete);
router.get("/inventory/search", productsController.search)

// API
router.get('/api', cors(), productsController.bringApi)
router.get('/api/:id', cors(), productsController.bringSingleApi)
router.get('/api/:id/image', cors(), productsController.image)

// Ruta Categorias

router.get("/clubs", productsController.categoryClubs);
router.get("/shoes", productsController.categoryShoes);
router.get("/accesories", productsController.categoryAccesories);
router.get("/bags", productsController.categoryBags);
router.get("/sets", productsController.categorySets);

module.exports = router;

