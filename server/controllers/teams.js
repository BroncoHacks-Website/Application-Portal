const {validationResult, matchedData} = require("express-validator");
const TeamModel = require("../models/teams");

const getAllTeams = async(req, res) => {
    try {
        const teams = await TeamModel.getTeams();
        if(teams.length === 0) {
            return res.status(404)
            .send({ status: "fail", message: "No Teams Were Found"})
        }
        res.status(200).send(teams);
    } catch(err) {
        // server side (generic) error 
        res.status(500).send({status: "error", message: err.message }); 
    }
}; // end getAllTeams


const getTeamByID = async(req, res) => {
    try {
        const teamid = req.params.teamid; // Extract teamid from URL parameters 
        const team = await TeamModel.getTeam(teamid);
        if(team.length === 0) {
            res.status(404)
            .send({status: "fail", message: "Team Not Found"})
        }
        res.status(200).send(team);
    }catch(err) {
        res.status(500)
        .send({status: "error", message: err.message})
    }
};


const createTeam = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            errors: errors.array()
        });
    }

    const {teamName, teamOwnerId} = matchedData(req);

    try {
        const newTeam = await TeamModel.createTeam(teamName, teamOwnerId);
        res.status(201).send({status: "success", data: newTeam});
    } catch(err) {
        res.status(500).send({status: "error", message: err.message});
    } 
}; // end createTeam


const deleteTeam = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            errors: errors.array()
        });
    }

    const {teamid} = MatchedData(req);
    try {
        const teamExists = await TeamModel.getTeam(teamid);
        if(!teamExists) {
            return res.status(404).send({status: "fail", message: "Team Not Found"});
        }
        await TeamModel.deleteTeam(teamid);
        res.status(204).send();
    } catch(err) {
        res.status(500).send({status:"error", message: err.message});
    }
};

module.exports = {
    getAllTeams,
    getTeamByID,
    createTeam,
    deleteTeam,
};