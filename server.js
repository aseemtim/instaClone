require("dotenv").config({ path: "./config/.env" });
const dbConnection = require("./config/database");
const express = require("express");
const app = express();

dbConnection();

app.get("/", (req, res) => {
  res.send("<h1>Hello Mom</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
