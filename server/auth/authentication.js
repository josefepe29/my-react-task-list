const jwt = require("jsonwebtoken");
require("dotenv").config();

//variable de entorno para auth
const SECRET_KEY = process.env.SECRET_KEY;

function validateCredentials(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }
  // Verifica y decodifica el token JWT
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid token" });
    } else {
      req.user = user;
      console.log(req.user);
      next();
    }
  });
}

//Funcion middleware de aplicacion para validar metodos HTTP

function validateHTTPMethods(req, res, next) {
  const validateMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!validateMethods.includes(req.method)) {
    return res.status(400).json({ error: "Invalid HTTP method" });
  }

  next();
}

module.exports = {
  validateCredentials,
  validateHTTPMethods,
};
