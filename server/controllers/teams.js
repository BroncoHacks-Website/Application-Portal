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


const createTeam = async() => {

};

/*
const deleteTeam() {

}

module.exports = {

};
*/