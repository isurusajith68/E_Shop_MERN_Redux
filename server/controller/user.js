const express = require("express");
const path = require("path");
const router = express.Router();
const User = require("../model/user");
const ErrorHandler = require("../util/ErrorHandler");
const { upload } = require("../multer");
const fs = require("fs");
router.post("/upload", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    const filename = req.file.filename;
    const filePath = `uploads/${filename}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting file" });
      }
    });
    return next(new ErrorHandler("User already exists", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };

  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    newUser,
  });
});

module.exports = router;
