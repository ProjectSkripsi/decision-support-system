const express = require("express");
const router = express.Router();
const {
  createTeacher,
  getTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");
const { isLogin, isAdmin } = require("../middlewares/auth");

/* GET users listing. */

router.post("/create", isLogin, isAdmin, createTeacher);
router.get("/:pageSize/:currentPage", isLogin, isAdmin, getTeacher);
router.delete("/:_id", isLogin, isAdmin, deleteTeacher);

module.exports = router;
