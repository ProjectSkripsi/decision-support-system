const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserById,
  updateProfile,
  changePassword,
  updateFiles,
} = require("../controllers/userController");
const { isLogin } = require("../middlewares/auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", isLogin, getUserById);
router.put("/profile/:_id", isLogin, updateProfile);
router.patch("/change-password", isLogin, changePassword);
router.post("/register", register);
router.post("/login", login);
router.patch("/:_id", isLogin, updateFiles);

module.exports = router;
