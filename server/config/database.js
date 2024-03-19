const mysql2 = require('mysql2');
require('dotenv').config();

const connection = mysql2.createConnection({
    host: 'broncohacks-db-instance-1.czg6e4aoq9ny.us-west-1.rds.amazonaws.com',
    database: 'initial_broncohacks_db',
    user: 'billybronco',
    password: 'daddybronco69420!'
});

module.exports = connection;