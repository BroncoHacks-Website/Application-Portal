const UserService = require('../services/user.services');

exports.login = async function login(req, res) {
    const {email, password} = req.body;

    try {
        const result = await UserService.loginUser(email, password);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(401).json({ message: result.message });
        }
    } catch(err) {
        console.error('Error logging in: ', err);
        res.status(500).json({ message: 'An error occurred while logging in '});
    }
}

exports.searchUser = async function search(username) {
    try {
        const query = 'SELECT * FROM users WHERE username LIKE ?';
        const values = [`%${username}%`];
        const [rows] = await db.query(query, values);
        if (rows.length > 0) {
            console.log('Users found: ', rows);
            return rows;
        } else {
            console.log('No users found with that username');
            return null;
        }
    } catch(err) {
        console.error('Error searching for user: ' + err);
    }
}