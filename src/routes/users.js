const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsLoginMw = require('../middlewares/validationsMw.js');
const registerValidationMw = require ('../middlewares/registerMw.js')
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


router.get('/login', usersController.login);
router.post('/login', validationsLoginMw, usersController.loginProcess)


// Registro

router.get('/register', usersController.register);
//proceso de registro
router.post('/register',registerValidationMw, uploadUserImg.single ("imagenUsuario"), usersController.create);



// Perfil

router.get('/profile', usersController.profile);


module.exports = router;

