const express = require("express");
const path = require("path");
const router = express.Router();
const User = require("../model/user");
const ErrorHandler = require("../middleware/error");
const { upload } = require("../multer");

router.post("/upload", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("Email already exists", 400));
  }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    console.log(user);


});

module.exports = router;
