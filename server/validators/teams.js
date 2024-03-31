const { param } = require("express-validator");

const teamIdValidator = [
  param("teamid")
  .notEmpty()
  .withMessage("Team ID cannot be empty")
  .isInt() // might need to change if we end up using UUIDs there is a .isUUID() method 
  .withMessage("Team ID must be an integer") 
]

module.exports = {
    teamIdValidator
};
