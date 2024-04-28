const db = require("../database");

async function getTeams() {
    const [teams] = await db.query(`SELECT * FROM Team`);
    return teams;
}

async function getTeamById(teamid) {
    const [team] = await db.query(`SELECT * FROM Team WHERE teamid = ?`, [teamid]);
    return team;
}

async function getTeamByOwner(userid) {
    const [team] = await db.query(`SELECT * FROM Team WHERE teamOwnerId = ?`, [userid]);
    return team;
}

async function deleteTeamById(teamid) {
    const team = await getTeamById(teamid);
    await db.query(`DELETE FROM Team WHERE teamid = ?`, [teamid]);
    return team;
}

module.exports = {
    getTeams,
    getTeamByOwner,
    getTeamById,
    deleteTeamById
};