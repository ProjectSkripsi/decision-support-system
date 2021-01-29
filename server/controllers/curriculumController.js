const Curriculum = require("../models/curriculum");

module.exports = {
  addCurriculum: async (req, res) => {
    const { fileUrl, title } = req.body;
    try {
      const response = await Curriculum.create({ title, fileUrl });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCurriculum: async (req, res) => {
    const { fileUrl, title } = req.body;
    const { id } = req.params;
    try {
      const response = await Curriculum.findByIdAndUpdate(
        { _id: id },
        {
          fileUrl,
          title,
        },
        {
          returnOriginal: false,
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCurriculum: async (req, res) => {
    try {
      const response = await Curriculum.find({ deleteAt: null });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
