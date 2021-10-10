const express = require('express');
const app = express();

const path= require('path');

const mainRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const productRouter = require('./routes/products.js');

app.use(express.static(path.join(__dirname,'/../public')));
app.set('view engine', 'ejs');


app.use('/', mainRouter );
app.use('/users', usersRouter );
app.use('/products', productRouter );


app.listen(3000, ()=>
    console.log('Estamos corriendo en el puerto 3000\nhttp://localhost:3000'));
