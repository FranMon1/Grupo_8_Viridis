const fs = require('fs');
const path = require('path');
const express = require('express');

let JsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'))
let usuarios = JSON.parse(JsonDeUsuarios)


let User = {
    findByMail: function(email){
        let usuarioEncontrado = [];
        usuarios.forEach(user => {
           
            if (email == user.email){
            usuarioEncontrado.push(user)
            }
          
        })
        return usuarioEncontrado;
    }
}




