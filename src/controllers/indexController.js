const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { product } = require('./productsController');


const controller = {
    index: (req, res) => {
        db.Product.findAll().then(productos => {
            db.Image.findAll()
            .then(image =>{
        return res.render("index", {productos: productos, image: image});
           })
        })
            
    }
};

module.exports = controller;

