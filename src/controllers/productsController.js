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
    }
};



module.exports = productsController;
