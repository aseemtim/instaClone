const User = require("../models/User");
module.exports = {
  getLogin: res.render("login.ejs"),
  postLogin: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      const passwordCorrect =
        user === null
          ? false
          : await bcrypt.compare(password, user.passwordHash);

      if (!(user && passwordCorrect)) {
        return response.status(401).json({
          error: "invalid username or password",
        });
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      const token = jwt.sign(userForToken, process.env.SECRET);

      response.status(200).send({ token, username: user.username });
    } catch (err) {
      console.log(err);
    }
  },
};
