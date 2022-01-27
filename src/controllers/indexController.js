const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const{ Op } = require("sequelize");

const controller = {
    index: (req, res) => {
        db.Product.findAll().then(productos => {
            db.Image.findAll()
            .then(image =>{
        return res.render("index", {productos: productos, image: image});
           })
        })
            
    },
    search: async function (req, res) {
        try {
        let products = await db.Product.findAll({
            where: {
                name: {[Op.like] : "%" + req.query.keyword + "%"}
            }
        })
        let images = await db.Image.findAll()

        console.log(products)
        return res.render("products/results", {products: products, images: images})
    }catch(e) {
        return res.json(e)
    }
       

    }
};

module.exports = controller;

