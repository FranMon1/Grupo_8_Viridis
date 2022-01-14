const {check} = require('express-validator');

const registerValidationMw = [
    check('nombre').notEmpty().withMessage('Debes completar con tu Nombre y Apellido'),
    check('usuario').isLength({ min : 4}).withMessage('El usuario debe tener al menos 4 caracteres'),
    check('password').notEmpty().withMessage('Debes completar con una contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener un mínimo de ocho caracteres'),
    check('email').isEmail().withMessage('Email Inválido')
]

module.exports = registerValidationMw;