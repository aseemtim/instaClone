require("dotenv").config({ path: "./config/.env" });
const dbConnection = require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const app = express();
const postsRoutes = require("./routes/posts");
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/users");
const getPostController = require("./controllers/posts");

dbConnection();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/login", loginRoutes);
app.use("/posts", postsRoutes);
app.use("/users", userRoutes);
app.use("/", getPostController.getPosts);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
