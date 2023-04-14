const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const User = require("../models/User");

usersRouter.post("/", async (req, res) => {
  const { username, password, firstName, lastName, dob, email } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash,
    firstName,
    lastName,
    dob,
    email,
  });

  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

usersRouter.get("/", async (req, res) => {
  const users = await User.find({});
  response.json(users);
});

module.exports = userRouter;
