const { validationResult, matchedData } = require("express-validator");
const TeamModel = require("../models/teams");

const getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.getTeams();
    if (teams.length === 0) {
      return res
        .status(404)
        .send({ status: "fail", message: "No Teams Not Found" });
    }
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const getTeamById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
        status: "fail",
        errors: errors.array(),
        });
    }
    
    const data = matchedData(req);
    
    try {
        const team = await TeamModel.getTeamById(data.teamid);
        if (team.length === 0) {
        return res
            .status(404)
            .send({ status: "fail", message: "Team Not Found" });
        }
        res.status(200).send(team);
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
};

const getTeamByOwner = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
        status: "fail",
        errors: errors.array(),
        });
    }
    
    const data = matchedData(req);
    
    try {
        const team = await TeamModel.getTeamByOwner(data.userid);
        if (team.length === 0) {
        return res
            .status(404)
            .send({ status: "fail", message: "Team Not Found" });
        }
        res.status(200).send(team);
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
};

const deleteTeamById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
        status: "fail",
        errors: errors.array(),
        });
    }
    
    const data = matchedData(req);
    
    try {
        const team = await TeamModel.deleteTeamById(data.teamid);
        res.status(200).send(team);
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
};

module.exports = {
    getTeams,
    getTeamById,
    getTeamByOwner,
    deleteTeamById
};