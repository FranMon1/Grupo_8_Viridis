const { check } = require('express-validator')

let validationsMw = function (){
check('email').notEmpty().withMessage('Debe ingresar un Email');
check('password').notEmpty().withMessage('Debe ingresar una contraseña');

}
module.exports = validationsMw