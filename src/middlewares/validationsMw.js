const { check } = require('express-validator')

const validationsMw = [
check('email').isEmail().withMessage('Email Inválido'),
check('password').isLength({min: 10}).withMessage('Debe ingresar una contraseña')
]
module.exports = validationsMw;