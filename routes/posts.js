const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postController = require("../controllers/posts");

router.get("/", postController.getPosts);
router.post("/", upload.single("file"), postController.createPost);

module.exports = router;
