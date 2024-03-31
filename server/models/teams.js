const db = require("../database");

async function getTeams() {
    const [teams] = await db.query(`SELECT * FROM Team`);
    return teams;
}

async function getTeamById(id) {
    const [team] = await db.query(`SELECT * FROM Team WHERE teamid = ?`, [id]);
    return team;
}

async function deleteTeamById(id) {
    const team = await getTeamById(id);
    await db.query(`DELETE FROM Team WHERE teamid = ?`, [id]);
    return team;
}

module.exports = {
    getTeams,
    getTeamById,
    deleteTeamById
};