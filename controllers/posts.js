const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find({}).lean();
      res.render("index.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Handle image upload
      const result = await cloudinary.uploader.upload(req.file.path);
      await Post.create({
        caption: req.body.caption,
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });
      console.log("Post created");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};
