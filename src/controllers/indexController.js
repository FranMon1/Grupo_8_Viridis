const fs = require('fs');
const path = require('path');

let archivoProductos = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8');
let productos = JSON.parse(archivoProductos)


const controller = {
    index: (req, res) =>{
        let porVender = [];
        productos.forEach(product => {
            
            if(product.quantity >= 1000){
                 porVender.push(product)
            }
            
        })
        res.render("index", {product: porVender});
    }
};

module.exports = controller;

