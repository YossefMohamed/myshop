const handler = require("express-async-handler");
const User = require("../models/userModel");
const signIn = require("../utils/signInJWT");
const multer = require("multer");
//Image Controlles
// const sharp = require("sharp");

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images.", false));
  }
};

const upload = multer({
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = handler(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

//end of image controlles
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
  // console.log(req.user);
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
    // console.log(error.message);
    res.status(404);
    throw new Error(error.message);
  }
});

exports.updateMe = handler(async (req, res, next) => {
  //create an error if user trys to update the password
  if (!req.body.name || !req.body.email) {
    return next(new Error("Please Fill All Fields !"));
  }

  req.user.email = req.body.email;
  req.user.name = req.body.name;
  // console.log(
  //   await req.user.matchPassword(req.body.oldPassword),
  //   "asdasdasawwwwwwwwe"
  // );
  // console.log(req.body);
  if (req.body.password) {
    if (req.body.password !== req.body.confirmPassword) {
      res.status(400);
      next(new Error("Password And Confirm Password Not Equal !"));
    }
    if (req.user && !(await req.user.matchPassword(req.body.oldPassword))) {
      res.status(400);
      next(new Error("Incorrect Password"));
    }
    req.user.password = req.body.password;
  }
  const user = await req.user.save();
  res.status(200).json({
    status: "ok",
    user,
  });
});
