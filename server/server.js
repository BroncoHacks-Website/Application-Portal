require('dotenv').config();
const express = require('express');

const port = process.env.PORT;
console.log(port);

// express app
const app = express();

// database
const db = require('./database');

app.use(express.json())

// test db connection
app.get('/', async (req, res) => {
    try {
        const sql = await connection.query("SELECT * FROM initial_broncohacks_db.User")
        res.status(200).send('Successful Connection') 
    } catch (err) {
        res.status(502).send('Failed To Connect')
    }
});

// gets all routes from ./routes/Users
const usersRouter = require('./routes/users');
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log('app listening on port', port)

    // connect to db
    db.connect(function(err) {
        if (err) throw err;
        console.log('database connected')
    })
});