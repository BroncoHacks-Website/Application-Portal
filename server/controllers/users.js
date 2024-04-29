const { validationResult, matchedData } = require("express-validator");
const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    if (users.length === 0) {
      return res
        .status(404)
        .send({ status: "fail", message: "No Users Not Found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; // end getAllUsers

const getUserByID = async (req, res) => {
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
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end getUserByID


// CALEB search bar code
const getUserByNameRegex = async (req, res) => {
  console.log(req.query.search)
  if (req.query.search == '') {
    res.status(400).send({ status: "error", message: "your mom" });
  } else {
    try {
      const regex = "^" + req.query.search;
      const [matchedUsers] = await db.query(`SELECT email FROM User WHERE (email REGEXP ?)`, [regex]);
      res.status(200).send(matchedUsers);
    } catch (err) {
      res.status(500).send({ status: "error", message: err.message });
    }
  }
}

const createUser = async (req, res) => {
  // validate (email is in correct format and password fulfills requirements)
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
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end createUser

const deleteUser = async (req, res) => {
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
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
};
