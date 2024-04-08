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
        await db.query("SELECT * FROM initial_broncohacks_db.User");
        res.status(200).send('Successful Connection');
    } catch (err) {
        console.error('Failed to connect to the database: ', err);
        res.status(502).send('Failed To Connect');
    }
});

// gets all routes from ./routes/Users
const usersRouter = require('./routes/users.js');
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log('app listening on port', port)
    // connect to db
    db.connect(err => {
        if (err) {
            console.error('Error connecting to the database: ', err);
            process.exit(1);
        }
        console.log('Database connected');
    });
});