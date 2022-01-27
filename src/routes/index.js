const express = require('express');
const path= require('path');
const router = express.Router();
const controllerIndex = require('../controllers/indexController');



router.get('/', controllerIndex.index);
router.get('/search', controllerIndex.search)

module.exports = router;

