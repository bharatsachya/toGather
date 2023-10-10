const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: new Date(),
    },
    tokens: {
      token: {
        type: String,
        required: true,
      },
    },
    isNGO: {
      type: Boolean,
      default: null,
    },
    isUser: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
