const express = require("express");
const router = express.Router();
const TeamsController = require("../controllers/teams");
const { teamIdValidator } = require("../validators/teams");

// GET route to get all teams
router.get("/", TeamsController.getAllTeams);

// GET route to get team by id
router.get("/:teamid", teamIdValidator, TeamsController.getTeamById);

// DELETE route to delete team by id
router.delete("/:teamid", teamIdValidator, TeamsController.deleteTeamById);

module.exports = router;