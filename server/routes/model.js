const express = require("express");
const router = express.Router();
const {
  createModel,
  getModel,
  getModelPublic,
} = require("../controllers/modelController");

const { isLogin, isAdmin } = require("../middlewares/auth");

router.post("/create", isLogin, isAdmin, createModel);
router.get("/:pageSize/:currentPage", isLogin, isAdmin, getModel);
router.get("/public/:pageSize/:currentPage", getModelPublic);

module.exports = router;
