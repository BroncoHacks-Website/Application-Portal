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