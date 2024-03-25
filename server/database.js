const mysql2 = require('mysql2');
require('dotenv').config();

const connection = mysql2.createConnection({
    host: process.env.HOST,
    database: 'initial_broncohacks_db',
    user: process.env.USER,
    password: process.env.PASSWORD
}).promise();

module.exports = connection;