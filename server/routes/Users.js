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

// POST a user
router.post("/", accountCreationValidator, async (req, res) => {
  //   const email = req.body.email;
  //   const password = req.body.password;

  //TODO: move this shit to the controller i think
  // const sql1 = "SELECT userid FROM `User` WHERE email = '" + email + "'";

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

  // try to send data to db
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

  //TODO: move this shit to the controller i think
  // db.query(sql1, function (err, result) {
  //   if (err) {
  //     throw err;
  //   }

  //   if (result.length == 0) {
  //     res.send("nah email is wide ass open");
  //   } else if (result[0].userid > 0) {
  //     res.send("mannn this email taken");
  //   } else if (password.length <= 8) {
  //     res.send("password too short");
  //   } else if (password.search(/[A-Z]/) < 0) {
  //     res.send("no uppercase");
  //   } else if (password.search(/[0-9]/) < 0) {
  //     res.send("no numba");
  //   } else if (password.search(/[!@#$%^&*()_]/) < 0) {
  //     res.send("no speshal karicters");
  //   } else {
  //     res.send("we gucci");
  //   }
  // });
});

module.exports = router;
