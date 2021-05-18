const User = require("../models/user");
const { encode, jwtEncode } = require("../helpers/hash");
const bcrypt = require("bcryptjs");

module.exports = {
  createTeacher: (req, res) => {
    const { email, password, name } = req.body;
    const hashPassword = encode(password);
    User.find({
      email: email,
      deleteAt: null,
    })
      .then((result) => {
        if (result.length === 0) {
          User.create({
            email,
            name,
            role: "teacher",
            password: hashPassword,
          })
            .then((newUser) => {
              res.status(201).json(newUser);
            })
            .catch((err) => {
              res.status(400).json({
                msg: `Invalid Input`,
                err: err,
              });
            });
        } else {
          res.status(400).json({
            msg: `email already register`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Error Server`,
        });
      });
  },

  getTeacher: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search, orderBy } = req.query;
    const order = orderBy === "newest" ? "DESC" : "ASC";
    const skip =
      Number(currentPage) === 1
        ? 0
        : (Number(currentPage) - 1) * Number(pageSize);

    var findCondition = { deleteAt: null, role: "teacher" };
    if (search) {
      findCondition = {
        deleteAt: null,
        name: { $regex: new RegExp(search, "i") },
      };
    }
    try {
      const response = await User.find(findCondition)
        .sort([["createdAt", order]])
        .limit(Number(pageSize) * 1)
        .skip(skip);
      const count = await User.countDocuments(findCondition);
      res.status(200).json({
        currentPage,
        data: response,
        pageSize,
        status: true,
        totalItem: count,
        totalPage: Math.ceil(count / Number(pageSize)),
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteTeacher: async (req, res) => {
    const { _id } = req.params;
    try {
      const response = await User.findByIdAndDelete({
        _id,
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
