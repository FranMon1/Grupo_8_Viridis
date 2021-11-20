const fs = require('fs');
const path = require('path');
const express = require('express');

let JsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'))
let usuarios = JSON.parse(JsonDeUsuarios)


let User = {
    findByMail: function(email){
        let usuarioEncontrado = usuarios.find(user => 
            user.email === email
        )
        return usuarioEncontrado;
    },
    newUser: function(){
        let ultimo = 0;
        usuarios.forEach( user => {
            if(user.id > ultimo){
                ultimo = user.id
            }
            
        })
        return ultimo + 1
    }
}

module.exports = User;




