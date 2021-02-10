const jwt = require("jsonwebtoken");
const handler = require("express-async-handler");
const User = require("./../models/userModel");
const signIn = require("../utils/signInJWT");

const protect = handler(async (req, res, next) => {
  let token;
  // console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // console.log(token);
      const decoded = jwt.verify(token, "JWT_SECRET");

      // console.log(decoded);
      const user = await User.findById(decoded.id).select(" -__v");
      // console.log(user, "KKKKKK");
      user._doc.token = signIn(user._id);

      req.user = user;
      next();
    } catch (error) {
      // console.log(error.message);
      res.status(401);
      throw new Error("Not Authorized !!!");
    }
  }
});
module.exports = protect;
