const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const { validationResult, matchedData } = require("express-validator");
const { accountCreationValidator } = require("../validators/users");
const db = require("../database");

// GET user by id
router.get("/:userid", async (req, res) => {
  const id = req.params.userid;
  const sql = "SELECT * FROM `User` WHERE userid = ?";
  
  if (!sql) {
    return res.status(500).send("SQL query is undefined");
  }

  db.query(sql, [id], async (err, result) => {
    if (err) {
      res.status(404).send("Resource Not Found");
      throw err;
    }
    res.status(200).send(result);
  });
});

// GET all users
router.get("/", async (req, res) => {
  // try {
  //   const result = await UserController.getUsers();
  //   res.status(200).send(result);
  // } catch (err) {
  //   res.status(500).send({
  //     status: "error",
  //     message: err.message,
  //   });
  // }

  const sql = "SELECT * FROM `User`";
  db.query(sql, async (err, result) => {
    if (err) {
      res.status(404).send("Resouce Not Found");
      throw err;
    }
    res.status(200).send(result);
  });
});

// POST user
router.post("/", accountCreationValidator, async (req, res) => {
  // validate
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const email = req.body.email;
  const password = req.body.password;

  const sql = "INSERT INTO `User` (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], async (err, result) => {
    if (err) {
      res.status(404).send("Resouce Not Found");
      throw err;
    }
    res.status(200).send(result);
  });
  
  
  // // validate (no errors)
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.status(400).send({
  //     status: "fail",
  //     errors: errors.array(),
  //   });
  // }

  // // only get the data that was validated (which in this case is just email and password)
  // const data = matchedData(req);
  // const email = data.email;
  // const password = data.password;

  // // send data to db
  // try {
  //   const createdAccount = await UserController.createAccount(email, password);
  //   res.status(200).send({
  //     status: "success",
  //     account: createdAccount,
  //     message: "Account created successfully",
  //   });
  // } catch (err) {
  //   res.status(500).send({
  //     status: "error",
  //     message: error.message,
  //   });
  // }
});

module.exports = router;
