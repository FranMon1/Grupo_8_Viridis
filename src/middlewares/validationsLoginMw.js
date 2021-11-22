const { check } = require('express-validator')

const validationsMw = [
check('email').isEmail().withMessage('Email Inválido'),
check('password', 'Invalid Password').notEmpty().bail().isLength({min: 5}).withMessage('Debe ingresar una contraseña')
]
module.exports = validationsMw;