const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const { validationResult, matchedData } = require("express-validator");
const { accountCreationValidator } = require("../validators/users");
const db = require("../database");

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

// GET user by id
router.get("/:userid", async (req, res) => {
  const id = req.params.userid;
  const sql = "SELECT * FROM `User` WHERE userid = ?";

  db.query(sql, [id], async (err, result) => {
    if (err) {
      res.status(404).send("Resource Not Found");
      throw err;
    }
    res.status(200).send(result);
  });
});

// POST user
router.post("/", accountCreationValidator, async (req, res) => {
  // validate (email is email and password fulfills requirements)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }
  const { email, password } = matchedData(req);

  try {
    const sql = "INSERT INTO `User` (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], async (err, result) => {
      res.status(200).send({ status: "success", data: result });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE user (by userid)
router.delete("/:userid", async (req, res) => {
  const id = req.params.userid;

  try {
    const sql = "DELETE FROM `User` WHERE userid = ?";
    db.query(sql, [id], async (err, result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
