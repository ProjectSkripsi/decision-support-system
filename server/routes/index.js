const express = require("express");
const router = express.Router();
const user = require("./users");
const file = require("./uploadFile");
const curriculum = require("./curriculum");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.use("/api/v1/user", user);
router.use("/api/v1/upload", file);
router.use("/api/v1/curriculum", curriculum);

module.exports = router;
