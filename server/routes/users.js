const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserById,
  updateProfile,
} = require("../controllers/userController");
const { isLogin } = require("../middlewares/auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", isLogin, getUserById);
router.put("/profile", isLogin, updateProfile);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
