const express = require("express");
const protect = require("../controllers/authMiddleware");
const router = express.Router();
const {
  login,
  getUserProfile,
  registerUser,
} = require("./../controllers/userController");

// /api/users

router.post("/login", login);

router.get("/profile", protect, getUserProfile);

router.post("/", registerUser);

module.exports = router;
