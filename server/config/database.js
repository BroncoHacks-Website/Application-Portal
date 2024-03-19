const mysql2 = require('mysql2');
require('dotenv').config();

const connection = mysql2.createConnection({
<<<<<<< HEAD
    host: process.env.DB_HOST,
    database: 'initial_broncohacks_db',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
=======
    host: 'broncohacks-db-instance-1.czg6e4aoq9ny.us-west-1.rds.amazonaws.com',
    database: 'initial_broncohacks_db',
    user: 'billybronco',
    password: 'daddybronco69420!'
>>>>>>> f0cb1ef83d6693d7a1e5b84a961d2dfa32ceb603
});

module.exports = connection;