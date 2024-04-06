// import the database connection
const { check } = require("express-validator");
const db = require("../database");

// ---------------- Creation ----------------
async function createTeam(teamName, passcode, teamOwnerId) {
    if(await checkTeamNameExists(teamName)) {
        throw new Error('Team name is Taken');
    }
    if(await checkUserInAnyTeam(userId)) {
        throw new Error('User is already part of a team');
    }
    const passcode = generatePasscode();
    const [team] = await db.query(
        'INSERT INTO Team(teamName, passcode, teamOwnerId) VALUES(?,?,?)', [teamName, passcode, teamOwnerId]
    );
    
    await addTeamMember(team.insertId, teamOwnerId, true);
    return getTeam(team.insertId);
}

async function generatePasscode() {
    let randomString = Math.random().toString(36).substring(2);
    randomString = randomString.padEnd(10, '0').substring(0, 8);
}

// ---------------- Update ----------------
async function addTeamMember(teamId, userId, isOwner) {
    await db.query('INSERT INTO TeamMember(teamid, userid, isOwner) VALUES(?,?,?)',
        [teamId, userId, isOwner]
    );
}

// ---------------- Checks ----------------
async function checkTeamNameExists(teamName) {
    const [teams] = await db.query('SELECT * FROM Team WHERE teamName = ?',
        [teamName]
    );

    return teams.length > 0;
}

async function checkUserInAnyTeam(userId) {
    const [members] = await db.query('SELECT * FROM TeamMember Where userid = ?', 
        [userId]);
    return members.length > 0;
}

// ---------------- Retrieval ----------------
async function getTeams() {
    const [teams] = await db.query('SELECT * FROM Team');
    return teams;
}

async function getTeam(id) {
    const [team] = await db.query('SELECT * FROM Team WHERE teamid = ?', [id]);
    return team;
}

// ---------------- Delete ----------------
async function deleteTeam(id) {
    const team = await getTeam(id);
    await db.query('DELETE FROM Team WHERE teamid = ?', [id]);
    return team.length ? team[0] : null;
}

//  ---------------- Exports ----------------
module.exports = { 
    createTeam,
    checkTeamNameExists,
    getTeams,
    deleteTeam,
};