const productsController = {
    product: (req, res) =>{
        res.send("src/product");
    },

    cart: (req, res) =>{
        res.send("src/cart");
    },

    detail: (req, res) =>{
        res.send('src/detail');
    },

    create: (req, res) =>{
        res.send('src/create');
    },

    edit: (req, res) =>{
        res.send('src/edit');
    }
};



module.exports = productsController;
