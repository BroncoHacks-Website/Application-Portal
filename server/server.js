require('dotenv').config();

const express = require('express');

// express app
const app = express();

// database
const connection = require('./database');

// test db connection
app.get('/', function (req, res) {
    let sql = "SELECT * FROM initial_broncohacks_db.User"
    connection.query(sql, function (err, result) {
        if (err) {
            // 502 Bad Gateway 
            res.status(502).send('Failed To Connect')
        } else {
            // 200 OK
            res.status(200).send('Successful Connection')
        }
    })
});

// gets all routes from ./routes/Users
const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

app.listen(process.env.PORT, () => {
    console.log('app listening on port', process.env.PORT)

    // connect to db
    connection.connect(function(err) {
        if (err) throw err;
        console.log('database connected')
    })
});