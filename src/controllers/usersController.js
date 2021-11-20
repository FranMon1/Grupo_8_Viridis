const fs = require('fs')
const express = require('express');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const { create } = require('domain');

// Base de datos
const jsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf-8')
const usuarios = JSON.parse(jsonDeUsuarios);

const newUserId = function (){
   let ultimo = 0;
   usuarios.forEach(usuario => {
   if (usuario.id > ultimo) {
       ultimo = usuario.id
   }
})
return ultimo + 1;

}


let usersController = {
    login: (req, res) =>{
       return res.render("users/login");
    },

    register: (req, res) =>{
       return res.render("users/register");
    },   
      create : function (req, res) {
         let usuario = {
            id: newUserId(),
            nombre: req.body.nombre,
            ...req.body,
         }

         usuarios.push(usuario);
        let nuevoUsuarioJson = JSON.stringify(usuarios, null, 4);

        fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), nuevoUsuarioJson)
        res.redirect("/users/login");

         
      },

    loginProcess: function(req, res){
      
      let usuarioAIngresar = User.findByMail(req.body.email)
      if(usuarioAIngresar){
         let usuarioIsOk = (req.body.password, usuarioAIngresar.password)
         if(usuarioIsOk){
            req.session.usuarioLogeado = usuarioAIngresar;
            res.redirect('profile');
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
       return res.render("users/profile", {usuario: req.session.usuarioLogeado});
    }
};


module.exports = usersController;
