const fs = require('fs')
const express = require('express');
const path = require('path');
const { validationResult } = require('express-validator');
//const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const db = require('../database/models');




// Base de datos
/* const jsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf-8')
const usuarios = JSON.parse(jsonDeUsuarios); */

let usersController = {
   login: (req, res) => {
      return res.render("users/login");
   },

   register: (req, res) => {
      return res.render("users/register");
   },
   create: function (req, res) {
      var registerErrors = validationResult(req);

      if (registerErrors.errors.length > 0) {
         return res.render('users/register', {
            errors: registerErrors.mapped(),
            oldData: req.body
         });
      } else {
         db.User.create({
            name: req.body.nombre,
            user: req.body.usuario,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            user_image: req.file ? req.file.filename : "default-placeholder.png"

         }).then((resultado) => {
            return res.redirect("/users/login")
         })
      }
   },

   loginProcess: function (req, res) {
      db.User.findOne({ where: { email: req.body.email } }).then(usuarioAIngresar => {
         if (usuarioAIngresar) {
            console.log(bcrypt.compareSync(usuarioAIngresar.password, req.body.password ))
            let usuarioIsOk = bcrypt.compareSync(req.body.password, usuarioAIngresar.password)
            if (usuarioIsOk) {
               delete usuarioAIngresar.password;
               req.session.userLogged = usuarioAIngresar;

               if (req.body.remember_user) {
                  res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
               }
               return res.redirect('/users/profile');

            } res.render('users/login', {
               errors: {
                  password: {
                     msg: "Contraseña inválida"
                  }
               },
               oldData: req.body
            });
         } else {
            let validations = validationResult(req);
            if (validations.errors.length > 0) {
               return res.render('users/login', {
                  errors: validations.mapped(),
                  oldData: req.body
               });
            }
         }
      })
      //    let usuarioAIngresar = User.findByMail(req.body.email)



   },
   profile: function (req, res) {
      // console.log(req.cookies.userEmail)
      return res.render("users/profile", { user: req.session.userLogged });
   },
   logout: function (req, res) {
      res.clearCookie('userEmail')
      req.session.destroy();
      res.redirect('/')
   }
};


module.exports = usersController;






/* create : function (req, res) {
   var registerErrors = validationResult(req);

   if (registerErrors.errors.length > 0) {
      return res.render('users/register', {
         errors: registerErrors.mapped(),
         oldData: req.body
      });
   }else{ 
       let usuario = {
         id: User.newId(),
         ...req.body,
          password: bcrypt.hashSync(req.body.password, 10), 
          imagenUsuario: req.file ? req.file.filename : "default-placeholder.png"
          
         
      }                
      usuarios.push(usuario);
     let nuevoUsuarioJson = JSON.stringify(usuarios, null, 4);

     fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), nuevoUsuarioJson)
   } res.redirect("/users/login");
}, */