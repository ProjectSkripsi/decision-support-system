const Model = require("../models/model");

module.exports = {
  createModel: async (req, res) => {
    const {
      title,
      description,
      fileUrl,
      coverUrl,
      learningConcept,
      teacherExpertise,
      equivalenceModule,
      year,
      score,
      author,
    } = req.body.data;
    try {
      const response = await Model.create({
        title,
        description,
        fileUrl,
        coverUrl,
        learningConcept,
        teacherExpertise,
        equivalenceModule,
        year,
        score,
        author,
      });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getModel: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search } = req.query;
    const skip =
      Number(currentPage) === 1
        ? 0
        : (Number(currentPage) - 1) * Number(pageSize);

    var findCondition = { deleteAt: null };
    if (search) {
      findCondition = {
        deleteAt: null,
        title: { $regex: new RegExp(search, "i") },
      };
    }

    try {
      const response = await Model.find(findCondition)
        .sort([["createdAt", "DESC"]])
        .limit(Number(pageSize) * 1)
        .skip(skip);
      const count = await Model.countDocuments(findCondition);
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

  getModelPublic: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search } = req.query;
    const skip =
      Number(currentPage) === 1
        ? 0
        : (Number(currentPage) - 1) * Number(pageSize);

    var findCondition = { deleteAt: null };
    if (search) {
      findCondition = {
        deleteAt: null,
        title: { $regex: new RegExp(search, "i") },
      };
    }

    try {
      const response = await Model.find(findCondition)
        .sort([["createdAt", "DESC"]])
        .limit(Number(pageSize) * 1)
        .skip(skip);
      const count = await Model.countDocuments(findCondition);
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

  publishModel: async (req, res) => {
    try {
      const { id, type } = req.params;
      const isType = type === "publish";
      const response = await Model.updateOne(
        {
          _id: id,
        },
        {
          isPublish: isType,
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteModel: async (req, res) => {
    try {
      const { ids } = req.body;
      const response = await Model.updateMany(
        { _id: { $in: ids } },
        { $set: { deleteAt: Date.now() } },
        { multi: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getModelById: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Model.findById({ _id: id });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnyModel: async (req, res) => {
    try {
      const response = await Model.aggregate([
        { $match: { deleteAt: null } },
        { $sample: { size: 6 } },
      ]);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
