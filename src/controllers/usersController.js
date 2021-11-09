const fs = require('fs')
const express = require('express');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs')

// Base de datos
const jsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf-8')
const usuarios = JSON.parse(jsonDeUsuarios);


let usersController = {
    login: (req, res) =>{
       return res.render("users/login");
    },

    register: (req, res) =>{
       return res.render("users/register");
    },
    loginProcess: function(req, res){
      
      let usuarioAIngresar = User.findByMail(req.body.email)
      if(usuarioAIngresar){
         let usuarioIsOk = bcrypt.compareSync(req.body.password, usuarioAIngresar.password)
         if(usuarioIsOk){
            res.redirect('users/profile');
       }
      } else {
         let validations = validationResult(req);
      if(validations.errors.length > 0){
         return res.render('users/login',{
            errors: validations.mapped(),
            oldData: req.body
         });
      }
    }
   },
    profile: function (req, res){
       return res.render("users/profile");
    }
};


module.exports = usersController;
