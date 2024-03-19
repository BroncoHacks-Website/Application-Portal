require('dotenv').config();
const express = require('express');

const port = process.env.PORT;
console.log(port);

// express app
const app = express();

// database
const db = require('./config/database');

// test db connection
// app.get('/', function (req, res) {
//     let sql = "SELECT * FROM initial_broncohacks_db.User"
//     connection.query(sql, function (err, result) {
//         if (err) {
//             // 502 Bad Gateway 
//             res.status(502).send('Failed To Connect')
//         } else {
//             // 200 OK
//             res.status(200).send('Successful Connection')
//         }
//     })
// }); 

// gets all routes from ./routes/Users
const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log('app listening on port', port)

    // connect to db
    db.connect(function(err) {
        if (err) throw err;
        console.log('database connected')
    })
});