const mysql2 = require('mysql2');
require('dotenv').config();

const connection = mysql2.createConnection({
    host: process.env.HOST,
    database: 'initial_broncohacks_db',
    user: process.env.USER,
    password: process.env.PASSWORD
}).promise();

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        process.exit(1);
    }
});

module.exports = connection;