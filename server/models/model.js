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
      type: Object,
    },

    deleteAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model("Model", modelSchema);
module.exports = Model;
