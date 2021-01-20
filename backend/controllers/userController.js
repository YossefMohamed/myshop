const { json } = require("express");
const handler = require("express-async-handler");
const User = require("../models/userModel");
const signIn = require("../utils/signInJWT");

exports.authUser = handler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("-__v");
  if (user && (await user.matchPassword(password))) {
    const ModUser = user;
    ModUser._doc.token = signIn(user._id);
    ModUser._doc.password = undefined;
    res.status(200).json({
      user: ModUser,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password !");
  }
});

exports.getUserProfile = handler(async (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.status(404);
    throw new Error("User Not Found !");
  }
  res.status(200).json(req.user);
});

exports.registerUser = handler(async (req, res) => {
  const { email, name, password } = req.body;
  if (!name || !email || !password) {
    rse.status(401);
    throw new Error("Eh dah b2a ??");
  }
  const user = await User.create({
    email,
    name,
    password,
  });
  res.status(201).json({
    ...user._doc,
    token: signIn(user._id),
  });
});
