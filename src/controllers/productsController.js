const fs = require('fs');
const path = require('path');

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
    product: (req, res) =>{
      return res.render("products/product");
    },

    cart: (req, res) =>{
       return res.render("products/cart");
    },

    detail: (req, res) =>{
        return res.render('products/detail');
    },

    create: (req, res) =>{
        return res.render('products/create');
    },

    edit: (req, res) =>{
        return res.render('products/edit');
    },
    inventory: function (req,res) {
        return res.render('products/inventory')
    },
    store: function (req, res, next) {

        

        if (req.file !== undefined) {

            let newProduct = {

               id: newProductId(),
                ...req.body,
            }

            newProduct.productimg = req.file.filename

            productos.push(newProduct);

            let JsonDeProductos = JSON.stringify(productos, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), JsonDeProductos)
        } else {
            return
        }
        res.redirect('/')
    }
};

module.exports = productsController;
