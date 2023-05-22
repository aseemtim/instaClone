require("dotenv").config({ path: "./config/.env" });
const dbConnection = require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const app = express();

dbConnection();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const results = await Post.find({});
  res.render("index.ejs", { posts: results });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
