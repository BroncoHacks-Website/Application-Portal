
const connection = require('../database');

const asyncHandler = require("express-async-handler")



class UserServices {

    static async registerUser() {
        res.json({ message: "Register the User"})
    };
    
    static async loginUser(email, password) {
    
        try {
            const query = 'SELECT * FROM User WHERE email = ? AND password = ?';
            const [ rows, fields ] = await connection.query(query, [email, password]);

            if(rows.length == 0) {
                return {
                    success:false, message: "false email or password"
                };
            }

            const user = rows[0];
            const passwordMatch = user.password == password;

            if(passwordMatch) {
                return {
                    success:true, message: "Successfully logged in"
                };
            }
            else {
                return {
                    success:false, message: "False email or password"
                };
            }

        }
        catch(err) {
            console.error("Error: ", err)
            return {
                success:false, message: "error logging in"
            };
        }
        
    };
}
module.exports = { UserServices } ;