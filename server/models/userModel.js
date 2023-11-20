const mongoose = require('mongoose')
const {model, Schema} = mongoose


//Esquema para los documentos de usuarios
const userSchema = new Schema({
    user: String,
    password: String
});

//Modelo para la coleccion users
const UserModel = model('users',userSchema);

module.exports = UserModel;