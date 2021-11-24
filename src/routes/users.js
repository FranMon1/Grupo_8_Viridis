const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsLoginMw = require('../middlewares/validationsLoginMw.js');
const registerValidationMw = require ('../middlewares/registerMw.js');
const guestMw = require('../middlewares/guestMw');
const authMw = require('../middlewares/authMW');
const path = require ('path');
const multer = require('multer');


/* Configuración de Multer  */
const storageUsers = multer.diskStorage({
    destination: function(req, file, cb) {
        let userImg = path.join(__dirname, '../../public/images/users')
            cb(null, userImg)
    },
    filename: (req, file, cb) => {
        let newUserImg = 'user' + Date.now() + path.extname(file.originalname)
        cb(null, newUserImg)
    }
})
const uploadUserImg = multer({ storage : storageUsers });

// Login

router.get('/login', guestMw, usersController.login);
router.post('/login', validationsLoginMw, usersController.loginProcess)


// Registro

router.get('/register',  guestMw, usersController.register);
router.post('/register', uploadUserImg.single ("imagenUsuario"), registerValidationMw, usersController.create);



// Perfil

router.get('/profile', authMw, usersController.profile);
router.get('/logout', usersController.logout)


module.exports = router;

