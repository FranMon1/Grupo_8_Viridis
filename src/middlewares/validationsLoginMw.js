const { check } = require('express-validator')

const validationsMw = [
    check('email').isEmail().withMessage('Email Inválido'),
    check('password').notEmpty().withMessage('Debes completar con una contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener un mínimo de ocho caracteres'),
]
module.exports = validationsMw;