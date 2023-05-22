const postRouter = require("express").Router();
const Post = require("../models/Post");

postRouter.post("/", async (req, res) => {
  const { caption } = req.body;
  const post = new Post({
    caption,
  });

  const savedPost = await post.save();
  console.log(savedPost);
  res.redirect("/");
});

postRouter.get("/", async (req, res) => {
  console.log("here in get post");
  const posts = await Post.find({});
  console.log(posts);
  return res.json(posts);
});

module.exports = postRouter;
