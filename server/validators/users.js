const { param, body } = require("express-validator");

const accountCreationValidator = [
  // Validate email
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email format"),
  // Validate password
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
    .withMessage(
      "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
    ),
];

module.exports = {
  accountCreationValidator,
};
