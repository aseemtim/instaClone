const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.getUsers);
router.post("/", userController.postUser);

module.exports = router;
