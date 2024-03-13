require('dotenv').config();

const express = require('express');
const app = express();
const connection = require('./database');

app.get('/', function (req, res) {
    let sql = "SELECT * FROM initial_broncohacks_db.User"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});

app.listen(process.env.PORT, () => {
    console.log('app listening on port', process.env.PORT)
    connection.connect(function(err) {
        if (err) throw err;
        console.log('database connected')
    })
});