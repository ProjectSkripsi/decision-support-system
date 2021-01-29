const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { isLogin, isAdmin } = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../public/files/"));
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
});

const storagePicture = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploadImages = multer({
  storage: storagePicture,
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
});

router.post(
  "/file",
  isLogin,
  isAdmin,
  upload.single("file"),
  function (req, res) {
    const { host } = req.headers;
    const fullUrl = req.protocol;
    const urlFile = `https://bp-paud.arul21.com/uploads/${req.file.filename}`;
    res.send({
      status: 200,
      message: "Your file is successfully uploaded",
      fileUrl: urlFile,
    });
  }
);

router.post(
  "/image",

  uploadImages.single("file"),
  function (req, res) {
    const fullUrl = req.protocol;
    const { host } = req.headers;
    const urlFile = `https://bp-paud.arul21.com/images/${req.file.filename}`;
    res.send({
      status: 200,
      message: "Your file is successfully uploaded",
      fileUrl: urlFile,
    });
  }
);

module.exports = router;
