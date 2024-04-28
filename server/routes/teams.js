const express = require("express");
const router = express.Router();
const TeamsController = require("../controllers/teams");
const { teamIdValidator } = require("../validators/teams");
const { userIdValidator } = require("../validators/users");

// GET route to get teams
router.get("/", TeamsController.getTeams);

// GET route to get team by id
router.get("/:teamid", teamIdValidator, TeamsController.getTeamById);

// GET route to get team by owner
router.get("/:teamid", userIdValidator, TeamsController.getTeamByOwner);

// DELETE route to delete team by id
router.delete("/:teamid", teamIdValidator, TeamsController.deleteTeamById);

module.exports = router;