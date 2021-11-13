const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsLoginMw = require('../middlewares/validationsMw.js')


// Login


router.get('/login', usersController.login);
router.post('/login', validationsLoginMw, usersController.loginProcess)


// Registro

router.get('/register', usersController.register);


// Perfil

router.get('/profile', usersController.profile);


module.exports = router;

