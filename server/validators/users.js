const { param, body } = require("express-validator");
const UserModel = require("../models/users");

const userIdValidator = [
  param("userid")
    .notEmpty()
    .withMessage("User ID cannot be empty")
    .isInt() // might need to change if we end up using UUIDs there is a .isUUID() method
    .withMessage("User ID must be an integer"),
];

const accountCreationValidator = [
  // Validate email
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const exists = await UserModel.getUserByEmail(email);
      if (exists.length > 0) {
        throw new Error("Email already in use");
      }
    }),
  // Validate password
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()?])[A-Za-z\d!@#$%^&*()?]{8,}$/
    )
    .withMessage(
      "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
    ),
];

const imageValidator = [
  body("imageURL")
    .notEmpty()
    .withMessage("Image cannot be empty")
    .isURL()
    .withMessage("Invalid URL format"),
  body("imageLocation")
    .notEmpty()
    .withMessage("Image Location cannot be empty"),
  body("imageId").notEmpty().withMessage("Image ID cannot be empty"),
];

module.exports = {
  userIdValidator,
  accountCreationValidator,
  imageValidator,
};
