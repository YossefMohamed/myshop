const jwt = require("jsonwebtoken");
const handler = require("express-async-handler");
const User = require("./../models/userModel");

const protect = handler(async (req, res, next) => {
  let token;
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password -__v");
      req.user = user;
      next();
    } catch (error) {
      console.log(error.message);
      res.status(401);
      throw new Error("Not Authorized !!!");
    }
  }
});
module.exports = protect;
