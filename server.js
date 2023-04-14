require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Mom</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
