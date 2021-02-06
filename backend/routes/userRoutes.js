const express = require("express");
const protect = require("../controllers/authMiddleware");
const router = express.Router();
const {
  login,
  getUserProfile,
  registerUser,
  uploadUserPhoto,
  resizeUserPhoto,
  updateMe,
} = require("./../controllers/userController");

// /api/users

router.post("/login", login);

router.get("/profile", protect, getUserProfile);
router.get("/me", protect, getUserProfile);
router.patch("/update", protect, updateMe);

router.post("/", uploadUserPhoto, resizeUserPhoto, registerUser);

module.exports = router;
