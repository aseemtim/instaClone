const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = {
  getLogin: (req, res) => {
    try {
      res.render("login.ejs", { query: req.query });
    } catch (err) {
      console.log(err);
    }
  },
  postLogin: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      const passwordCorrect =
        user === null
          ? false
          : await bcrypt.compare(password, user.passwordHash);

      if (!(user && passwordCorrect)) {
        return res.status(401).json({
          error: "invalid username or password",
        });
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      const token = jwt.sign(userForToken, process.env.SECRET);

      res.status(200).send({ token, username: user.username });
    } catch (err) {
      console.log(err);
    }
  },
};
