const Curriculum = require("../models/curriculum");

module.exports = {
  addCurriculum: async (req, res) => {
    const { fileUrl } = req.body;
    try {
      const response = await Curriculum.create({ fileUrl });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCurriculum: async (req, res) => {
    const { fileUrl } = req.body;
    const { id } = req.params;
    try {
      const response = await Curriculum.findByIdAndUpdate(
        { _id: id },
        {
          fileUrl,
        },
        {
          returnOriginal: false,
        }
      );
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCurriculum: async (req, res) => {
    try {
      const response = await Curriculum.find({});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
