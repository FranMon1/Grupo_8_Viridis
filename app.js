const express = require('express');
const app = express();
const path= require('path');
app.use(express.static(path.join(__dirname,'public')));


app.listen(3000, ()=> {
    console.log('Estamos corriendo en el puerto 3000')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/cart.html'));
});

app.get('/detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/detail.html'));
});

app.listen(3000, ()=>
    console.log('Estamos corriendo en el puerto 3000\nhttp://localhost:3000'));

