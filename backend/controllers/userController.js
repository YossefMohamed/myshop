const handler = require("express-async-handler");
const User = require("../models/userModel");
const signIn = require("../utils/signInJWT");

exports.login = handler(async (req, res) => {
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
  try {
    if (!name || !email || !password) {
      rse.status(401);
      throw new Error("Eh dah b2a ??");
    }
    const checkMail = await User.findOne({ email });
    if (checkMail) {
      res.status(404);
      throw new Error("There's Account with this Email !");
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
  } catch (error) {
    console.log(error.message);
    res.status(404);
    throw new Error(error.message);
  }
});
