const ErrorHandler = require('../util/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors'); 
const jwt = require('jsonwebtoken');
const User = require('../model/user');
// Check if user is authenticated or not
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
 // console.log(token)

  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  //console.log(decoded.id)

  next();
});