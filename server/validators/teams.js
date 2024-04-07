const { param, body } = require("express-validator");
const TeamModel = require('../models/teams')

const teamIdValidator = [
    param('teamid')
    .notEmpty().withMessage('Team ID cannot be empty')
    .isInt().withMessage('Team ID must be an integer')
];

const teamCreationValidator = [
    body('teamName')
    .trim() // remove leading/trailing whitespaces
    .notEmpty().withMessage('Team name cannot be empty')
    .isLength().withMessage('Team name must be at least 3 characters long'),

    body('teamOwnerId')
    .notEmpty().withMessage('Team Owner Id cannot be empty')
    .isInt().withMessage('Team Ownser Id must be an integer')
];

module.exports = {
    teamIdValidator,
    teamCreationValidator,
}