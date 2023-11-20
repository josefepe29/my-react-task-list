const express = require('express');
const app = express();
const api = require('./Routes/tasks.routes.js');
require('dotenv').config()
const connectDB = require('./db.js')
const login = require("./auth/login")
const { validateCredentials, validateHTTPMethods } = require("./auth/authentication.js")
const cors = require('cors')

app.use(cors())

//Conexion a la base de datos
connectDB()

//Variables de entorno
const PORT = process.env.PORT


app.use(express.json());

//Middleware para validar metodos HTTP
app.use(validateHTTPMethods)

//Uso de login
app.use("/login", login)

//Middleware para validar credenciales de los usuarios
// app.use(validateCredentials)

//Uso del router de las tareas
app.use('/api',api)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

