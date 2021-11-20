const express = require('express');
const app = express();
const methodOverride = require('method-override')
const path= require('path');
const session = require('express-session');
const mainRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const productRouter = require('./routes/products.js');
// const userLoggedMw = require("./middlewares/userLogged.js")

// Session
app.use(session({
    secret: 'Secreto',
    resave: false,
    saveUninitialized: false
}));
// app.use(userLoggedMw());

app.use(methodOverride('_method'))


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.static(path.join(__dirname,'/../public')));

/* Config Enncoded */

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', mainRouter );
app.use('/users', usersRouter );
app.use('/products', productRouter );


app.listen(3000, ()=>
    console.log('Estamos corriendo en el puerto 3000\nhttp://localhost:3000'));
