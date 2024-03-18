const express = require("express");
const router = express.Router();
const { validationResult, matchedData } = require("express-validator");
const db = require("../database");
const { accountCreationValidator } = require("../validators/users");

// GET all users
router.get("/", async (req, res) => {
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
router.post("/local", accountCreationValidator, async (req, res) => {
  // validate (no errors)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: "fail",
      errors: errors.array(),
    });
  }

  // only get the data that was validated (which in this case is just email and password)
  const data = matchedData(req);
  const email = data.email;
  const password = data.password;

  // send data to db
  try {
    const createdAccount = await UserController.createAccount(email, password);
    res.status(200).json({
      status: "success",
      account: createdAccount,
      message: "Account created successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;
