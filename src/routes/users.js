const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsMw = require('../middlewares/validationsMw.js')


// Login


router.get('/login', usersController.login);
router.post('/login',validationsMw, usersController.inside)


// Registro

router.get('/register', usersController.register);



module.exports = router;

