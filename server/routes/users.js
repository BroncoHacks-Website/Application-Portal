const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users")
const {
  userIdValidator,
  accountCreationValidator,
  userLoginValidator
} = require("../validators/users");

// GET route to get all users
router.get("/", UserController.getAllUsers);

// GET route to get user by id
router.get("/getUser/:userid", userIdValidator, UserController.getUserByID); // changed route name because of conflict with other route

//GET route to get user by email regex
//Caleb's scuffed ass code
router.get("/getEmailByRegex", UserController.getUserByNameRegex);

// POST route to create new user
router.post("/", accountCreationValidator, UserController.createUser);

// DELETE route to delete a user
router.delete("/:userid", userIdValidator, UserController.deleteUser);

router.post("/login", userLoginValidator, UserController.loginUser);

router.get('/search/:username', UserController.searchUser);

module.exports = router;