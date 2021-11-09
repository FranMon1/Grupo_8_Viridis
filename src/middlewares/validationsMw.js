const { check } = require('express-validator')

const validationsMw = [
check('email').notEmpty().withMessage('Debe ingresar un Email'),
check('password').isLength({min: 10}).withMessage('Debe ingresar una contraseña')
]
module.exports = validationsMw;