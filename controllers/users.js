const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find({});
    res.json(users);
  },
  postUser: async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, username, password } = req.body;
    console.log(firstName, lastName, username, password);
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      firstName,
      lastName,
      username,
      passwordHash,
    });

    const savedUser = await user.save();
    console.log("user created successfully");
    res.redirect("/");
  },
};
