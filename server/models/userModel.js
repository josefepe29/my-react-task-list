const mongoose = require("mongoose");
const { model, Schema } = mongoose;

//Esquema para los documentos de usuarios
const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
});

//Modelo para la coleccion users
const UserModel = model("users", userSchema);

module.exports = UserModel;
