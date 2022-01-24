const { check } = require("express-validator");

const validationsEdit = [
    check("name").notEmpty().withMessage("Debe ingresar un nombre"),
    check("quantity").notEmpty().withMessage("Debe ingresar una cantidad de Stock"),
    check("price").notEmpty().withMessage("Debe ingresar un precio")
    
]

module.exports = validationsEdit