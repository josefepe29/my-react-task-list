const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const UserModel = require("../models/userModel.js");

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);
    // Verificar la contraseña
    if (!verifiedPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Autenticación exitosa
    const token = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token);
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const result = new UserModel({ name, email, password: encryptedPassword });
    const user = await result.save();

    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

const auth = async (req, res) => {
  const { token } = req.cookies;
  // Verifica y decodifica el token JWT
  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid token" });
    }
    const userFound = await UserModel.findById(user._id);
    return res.json({
      _id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    });
  });
};
module.exports = { login, register, logout, auth };
