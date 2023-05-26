const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find({});
    response.json(users);
  },
  postUser: async (req, res) => {
    const { firstName, lastName, username, password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      firstName,
      lastName,
      username,
      passwordHash,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  },
};
