const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  achievements: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model(
  "Achievement",
  achievementSchema
);