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
  updateModel,
  onDownload,
  getRecomendations,
} = require("../controllers/modelController");

const { isLogin, isAdmin } = require("../middlewares/auth");

router.get("/recomendation/all/:pageSize/:currentPage", getRecomendations);
router.get("/public/:pageSize/:currentPage", getModelPublic);
router.post("/delete", isLogin, isAdmin, deleteModel);
router.post("/create", isLogin, isAdmin, createModel);
router.get("/:pageSize/:currentPage", isLogin, isAdmin, getModel);
router.patch("/publish/:id/:type", isLogin, isAdmin, publishModel);
router.put("/update/:id", isLogin, isAdmin, updateModel);
router.get("/any-model", getAnyModel);
router.get("/:id", getModelById);
router.patch("/:id", onDownload);

module.exports = router;
