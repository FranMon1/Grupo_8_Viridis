const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsMw = require('../middlewares/validationsMw.js')


// Login


router.get('/login', usersController.login);
router.post('/login', usersController.inside)


// Registro

router.get('/register',validationsMw, usersController.register);



module.exports = router;

