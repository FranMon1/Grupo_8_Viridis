const fs = require('fs')
const express = require('express');
const path = require('path');

const User = require('../models/User.js');
const { validationResult } = require('express-validator');
const { encode } = require('punycode');

const jsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '..data/users.json'), 'utf-8')
const usuarios = JSON.parse(jsonDeUsuarios);


let usersController = {
    login: (req, res) =>{
       return res.render("users/login");
    },

    register: (req, res) =>{
       return res.render("users/register");
    },
    inside: function(){
      let validations = validationResult.req

    }
};


module.exports = usersController;
