// import the database connection
const db = require("../database");

async function createTeam(teamName, passcode, teamOwnerId) {
    const [team] = await db.query(
        'INSERT INTO Team(teamName, passcode, teamOwnerId) VALUES(?,?,?)', [teamName, passcode, teamOwnerId]
    );

    const id = team.insertId;
    return getTeam(id);
}

async function checkTeamNameExists(teamName) {
    const [teams] = await db.query('SELECT * FROM Team WHERE teamName = ?',
        [teamName]
    );

    return teams.length > 0;
}

async function getTeams() {
    const [teams] = await db.query('SELECT * FROM Team');
    return teams;
}

async function getTeam(id) {
    const [team] = await db.query('SELECT * FROM Team WHERE teamid = ?', [id]);
    return team;
}

async function deleteTeam(id) {
    const team = await getTeam(id);
    await db.query('DELETE FROM Team WHERE teamid = ?', [id]);
    return team;
}

module.exports = { 
    createTeam,
    checkTeamNameExists,
    getTeams,
    deleteTeam,

};