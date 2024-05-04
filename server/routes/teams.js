const express = require("express");
const router = express.Router();
const TeamController = require("../controllers/teams");
const {teamIdValidator, teamCreationValidator} = require("../validators/teams");

//WORKS
// Get route to get all teams
router.get("/", TeamController.getAllTeams);

// HAVENT TESTED
// get route to get team by id
router.get("/:teamid", teamIdValidator, TeamController.getTeamByID);

// WORKS
// POST route to create new team
router.post("/", teamCreationValidator, TeamController.createTeam);

// TESTING
// DELETE route to delete a team
router.delete("/:teamid", teamIdValidator, TeamController.deleteTeam);

module.exports = router;