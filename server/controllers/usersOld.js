const express = require("express");
const router = express.Router();
const UserModel = require("../models/users");
const { validationResult, matchedData } = require("express-validator");
const {
  userIdValidator,
  accountCreationValidator,
} = require("../validators/users");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    if (users.length === 0) {
      return res.status(404).send({ status: "fail", message: "No Users Not Found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
});

// GET user by id
router.get("/:userid", userIdValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const user = await UserModel.getUser(data.userid);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST user
router.post("/", accountCreationValidator, async (req, res) => {
  // validate (email is email and password fulfills requirements)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const { email, password } = matchedData(req);

  try {
    const newUser = await UserModel.createAccount(email, password);
    res.status(200).send({ status: "success", data: newUser });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE user (by userid)
router.delete("/:userid", userIdValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const deletedUser = await UserModel.deleteUser(data.userid);
    res.status(200).send({ status: "success", data: deletedUser });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
});

module.exports = router;
