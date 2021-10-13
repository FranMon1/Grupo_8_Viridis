const express = require('express');
const path= require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product', productsController.product);

router.get('/cart', productsController.cart);

router.get('/detail', productsController.detail);

router.get('/create', productsController.create);

router.get ('/inventory', productsController.inventory);

router.get ('/edit', productsController.edit);



module.exports = router;

