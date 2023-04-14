const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
