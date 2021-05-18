const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    name: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ijazah: {
      available: Boolean,
      fileUrl: String,
    },
    certificate: {
      type: Boolean,
      fileUrl: String,
    },
    deleteAt: {
      type: Date,
      default: null,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
