const User = require('../models/User.js');
const { validationResult } = require('express-validator')


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
