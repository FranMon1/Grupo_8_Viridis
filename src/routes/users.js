const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationsLoginMw = require('../middlewares/validationsLoginMw.js');
const registerValidationMw = require ('../middlewares/registerMw.js');
const guestMw = require('../middlewares/guestMw');
const authMw = require('../middlewares/authMW');
const adminMw = require('../middlewares/adminMw.js');
const path = require ('path');
const multer = require('multer');
const cors = require('cors');



/* Configuración de Multer  */
const storageUsers = multer.diskStorage({
    destination: function(req, file, cb) {
        let userImg = path.join(__dirname, '../../public/images/users')
            cb(null, userImg)
    },
    filename: (req, file, cb) => {
        let newUserImg = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newUserImg )
    }
})
const uploadUserImg = multer({ 
    storage : storageUsers,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
    });

// Login

router.get('/login', guestMw, usersController.login);
router.post('/login', validationsLoginMw, usersController.loginProcess)


// Registro

router.get('/register',  guestMw, usersController.register);
router.post('/register', uploadUserImg.single("image"), (req, res, next) => {
    const file = req.file;
    if(!file){
        const error = new Error("Por favor ingrese una imagen");
        error.httpStatusCode = 400;
        return next(error)
    } else {
        next();
    }
},  registerValidationMw, usersController.create);


// Perfil

router.get('/profile', authMw, usersController.profile);
router.get('/userDetail/:id', usersController.detail);
router.get('/logout', usersController.logout)

//Editar

router.get('/editprofile/:id', authMw, usersController.edit);
router.put('/editprofile/:id',uploadUserImg.single ("productimg"),  usersController.update)

//Api 

router.get('/api',cors(), usersController.apiList);
router.get('/api/:id',cors(), usersController.apiDetail);
router.get('/api/:id/image',cors(), usersController.image);



module.exports = router;

