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
        let productoEditar = productos.find(product => {
            return product.id == req.params.id;
        })
      res.render('products/edit', {product: productoEditar})
    },
    inventory: function (req,res) {

     

        return res.render('products/inventory', {product: productos})
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
    },
    update: function (req, res) {
      
      productos.forEach(product => {
          if(product.id == req.params.id){
           
            
              product.category = req.body.category
              product.name = req.body.name
              product.description = req.body.description
              product.price = req.body.price
              product.quantity = req.body.quantity
              product.size = req.body.size
              product.color = req.body.color
              product.brand = req.body.brand
              product.productimg = req.body.productimg
              
          }
      })
      
        let jsonDeProducts = JSON.stringify(productos, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProducts)

        res.redirect('/')
    },
};

module.exports = productsController;
