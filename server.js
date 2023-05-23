require("dotenv").config({ path: "./config/.env" });
const dbConnection = require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const app = express();
const postsRoutes = require("./routes/posts");
const getPostController = require("./controllers/posts");

dbConnection();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/posts", postsRoutes);
app.use("/", getPostController.getPosts);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
