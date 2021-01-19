const express = require("express");
const protect = require("../controllers/authMiddleware");
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require("./../controllers/userController");

router.post("/", authUser);

router.get("/profile", protect, getUserProfile);

router.post("/signin", registerUser);

module.exports = router;
