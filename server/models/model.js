const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
    coverUrl: {
      type: String,
    },
    learningConcept: {
      type: String,
    },
    teacherExpertise: {
      type: String,
    },
    equivalenceModule: {
      type: String,
    },
    year: {
      type: String,
    },
    score: {
      type: String,
    },
    isPublish: {
      type: Boolean,
      default: false,
    },
    deleteAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model("Model", modelSchema);
module.exports = Model;