const express = require("express");
const router = express.Router();
const {
  addCurriculum,
  updateCurriculum,
  getCurriculum,
} = require("../controllers/curriculumController");

const { isLogin, isAdmin } = require("../middlewares/auth");

router.get("/", getCurriculum);
router.post("/create", isLogin, isAdmin, addCurriculum);
router.put("/update/:id", isLogin, isAdmin, updateCurriculum);

module.exports = router;
