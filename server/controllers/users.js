const { validationResult, matchedData } = require("express-validator");
const UserModel = require("../models/users");
const bcrypt = require("bcrypt");

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
  hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await UserModel.createAccount(email, hashedPassword);
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

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ status: "fail", errors: errors.array() });
  }

  const data = matchedData(req);
  const [user] = await UserModel.getUserByEmail(data.email);

  console.log(data.password, user.password);
  try {
    if (!(await bcrypt.compare(data.password, user.password))) {
      return res
        .status(400)
        .send({ status: "fail", message: "Incorrect Password" });
    } else {
      res.status(200).send({ status: "success", data: user }); // this means login successful
    }
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const searchUser = async (req, res) => {
    const username = req.params.username;
    try {
        const query = 'SELECT * FROM users WHERE username LIKE ?';
        const values = [`%${username}%`];
        const [rows] = await db.query(query, values);
        if (rows.length > 0) {
            res.status(200).send(rows);
        } else {
            res.status(404).send({ message: 'No users found with that username' });
        }
    } catch(err) {
        console.error('Error searching for user: ' + err);
        res.status(500).send({ message: 'Error searching for user' });
    }
}

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  loginUser,
  searchUser
};
