const express = require('express');
const router = express.Router();
const db = require('../database')

// GET all users
router.get("/", async (req, res) => {
    const sql = "SELECT * FROM `User`"
    db.query(sql, async (err, result) => {
        if (err) {
            res.status(404).send('Resouce Not Found')
            throw err;
        }
        res.status(200).send(result);
    })
})

module.exports = router;