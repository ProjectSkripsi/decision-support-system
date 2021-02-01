const express = require("express");
const router = express.Router();
const {
  createModel,
  getModel,
  getModelPublic,
  deleteModel,
  publishModel,
  getModelById,
  getAnyModel,
} = require("../controllers/modelController");

const { isLogin, isAdmin } = require("../middlewares/auth");

router.get("/public/:pageSize/:currentPage", getModelPublic);
router.post("/delete", isLogin, isAdmin, deleteModel);
router.post("/create", isLogin, isAdmin, createModel);
router.get("/:pageSize/:currentPage", isLogin, isAdmin, getModel);
router.patch("/publish/:id/:type", isLogin, isAdmin, publishModel);
router.get("/any-model", getAnyModel);
router.get("/:id", getModelById);

module.exports = router;
