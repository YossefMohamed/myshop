exports.protect = catchAsync(async (req, res, next) => {
  // 1 - Getting token and check if its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new Error("PLease Login !"));
  }

  // 2- validate token
  const login = await jwt.verify(token, process.env.JWT_SECRET);

  const freshUser = await User.findById(login.id);
  if (!freshUser) {
    return next(new Error("Please Login Again !"));
  }

  req.user = freshUser;
  next();
});
