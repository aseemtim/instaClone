const Post = require("../models/Post");
module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find({});
      res.render("index.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      await Post.create({ caption: req.body.caption });
      console.log("Post created");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};
