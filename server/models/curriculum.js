const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema = new Schema(
  {
    title: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
    deleteAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const Curriculum = mongoose.model("Curriculum", curriculumSchema);
module.exports = Curriculum;
