const db = require('./database.js');


class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async save() {
        try {
            const query ='INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            const value = [this.username, this.email, this.password];
            await db.query(query, values);
            console.log('User registered successfully');
        } catch(err) {
            console.error('Error registering user: ' + err);
        }
    }
}

module.exports = User;