const express = require("express");
const router = express.Router();
const {
  login,
  register,
  logout,
  auth,
} = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.post("/verify", auth);

module.exports = router;
