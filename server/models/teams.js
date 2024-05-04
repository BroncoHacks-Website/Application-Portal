// import the database connection
const { check } = require("express-validator");
const db = require("../database");

// ---------------- Creation ----------------
async function createTeam(teamName, teamOwnerId) {
    if(await checkTeamNameExists(teamName)) {
        throw new Error('Team name is Taken');
    }
    if(await checkUserInAnyTeam(teamOwnerId)) {
        throw new Error('User is already part of a team');
    }

    try {
        const passcode = generatePasscode();
        console.log(passcode); // Make sure this prints a valid passcode
        const [team] = await db.query(
            'INSERT INTO Team(teamName, passcode, teamOwnerId) VALUES(?,?,?)', [teamName, passcode, teamOwnerId]
        );
        await addTeamMember(team.insertId, teamOwnerId, true);
        return getTeam(team.insertId);
    } catch(error) {
        console.log("SQL error:", error.message)
        throw error;
    }

}

function generatePasscode() {
    let randomString = Math.random().toString(36).substring(2);
    return randomString = randomString.padEnd(10, '0').substring(0, 8);
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
    if(team.length === 0) {
        return null;
    }
    return team[0];
}

// ---------------- Delete ----------------
async function deleteTeam(id) {
    // First delete rows in TeamMember
    await db.query('DELETE FROM TeamMember WHERE teamid = ?', [id]);

    // Then delete the Team itself
    await db.query('DELETE FROM Team WHERE teamid = ?', [id]);
    return {message: "Team and its members deleted successfully"}
}

//  ---------------- Exports ----------------
module.exports = { 
    createTeam,
    checkTeamNameExists,
    getTeams,
    getTeam,
    deleteTeam,
};