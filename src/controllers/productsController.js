const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { validationResult } = require("express-validator");
const{ Op }= require("sequelize")


let archivoProductos = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8');
let productos = JSON.parse(archivoProductos)

const newProductId = function (){
    let ultimo = 0;
    productos.forEach(product => {
    if (product.id > ultimo) {
        ultimo = product.id
    }
})
return ultimo + 1;

}



let productsController = {
    index: function (req, res){
         db.Product.findAll().then(productos => {
            db.Image.findAll()
            .then(image =>{
        return res.render("products/products", {productos: productos, image: image});
           })
        })
            
    
    },
    product: (req, res) =>{
        db.Product.findOne({
            where:{
                id: req.params.id
            }
        })
        .then(product => {
            db.Image.findOne({
                where: {
                    products_id: product.id
                }
            }).then(image => {
        return res.render("products/product", {product: product, images: image});
            })
        })
      
      
    },

    cart: (req, res) =>{
       return res.render("products/cart");
    },

    detail: (req, res) =>{
        return res.render('products/detail');
    },

    create: (req, res) =>{
        db.Brand.findAll().then(brands => {
            db.Category.findAll().then(categories => {
        return res.render('products/create',{brands: brands, categories: categories});
            })
            
        })
      
    },

    edit: async function (req, res) {
        await db.Product.findOne({ where: { id: req.params.id}})
        .then(producto => { db.Image.findOne({where: {products_id: producto.id}})
        .then(imagen => {
            return res.render("products/edit",{product: producto, image: imagen})
        })

        
    })
    },
    inventory: function (req,res) {

        db.Product.findAll().then(productos => {
        db.Category.findAll().then(category => {
        db.Brand.findAll().then(brand => {
        return res.render('products/inventory', {
            product: productos, 
            category: category, 
            brand: brand
        })
        })
        })
    });
    },
     store: function (req, res) {
            let validations = validationResult(req);
            
            if(validations.errors.length > 0) {
                 db.Category.findAll().then(categories => {
                db.Brand.findAll().then(brands =>{
                return res.render("products/create",{
                   brands: brands, 
                   categories: categories,
                    errors: validations.mapped(),
                    oldData: req.body
                })
                 })
            });
            } else{
                 
                db.Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                color: req.body.color,
                sizes: req.body.sizes,
                brands_id: req.body.brand,
                categories_id: req.body.categories
               
             
            }).then((resultado) => {
                db.Image.create({
                name: req.file.filename,
                products_id: resultado.id
           }).then(images => {
            return res.render("products/product", {images: images, product: resultado})
           })
        })
         
        }
           
    },

    update: function (req, res) {
        db.Product.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        size: req.body.size,
        color:  req.body.color}, {where: {id: req.params.id}})
        .then(product => {
            db.Image.findOne({where: {
                products_id: req.params.id
            }})
        .then(images => {
        return res.render(`products/product`, { images: images, product: product})
        })
        })  
    },
    delete: async function(req, res) {
       
       db.Image.findOne({ where: {products_id: req.params.id}})
        .then(image => { 
            image ? image.destroy() : null;
            db.Product.findOne({ where: {id: req.params.id}})
        .then(product => {
            product.destroy()
            })
            return res.redirect('/')
        })
      
    },
    search: function (req, res) {
        db.Product.findOne({
            where: {
                name: {[Op.like] : "%" + req.query.keyword + "%"}
        }}).then(resultado => { 
            db.Image.findOne({
                where: {
                    products_id: resultado.id
                }
            }).then (images => {
            return res.render("products/product", {images: images, product: resultado})
        })
        }).catch(err => { return res.send("error")})
    },
    category: function(req, res){
        db.Category.findAll().then(resultado =>{
            return res.render("products/preferences", {categories: resultado})
        })
        
    },
    categoryAdd: function (req, res){
        if(req.body.categories){
            db.Category.create({
                name: req.body.categories
            })
        } else if (req.body.brands){
            db.Brand.create({
                name: req.body.brands
            })
        }
        res.redirect("create")
    }
          
};

module.exports = productsController;
