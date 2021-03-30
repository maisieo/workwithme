var express = require('express');
var router = express.Router();
const { ensureSameUser } = require('../middleware/guards');
const db = require("../model/helper");

// get all users
router.get('/users', async function(req, res, next) {
    let sql = 'SELECT * FROM users ORDER BY username;';

    try {
        let results = await db(sql);
        let users = results.data;
        // users.forEach(u => delete u.password);  // don't return passwords
        res.send(users.username);
    } catch (err) {
        next(err);
    }
});

// get one user 
router.get('/:userId', ensureSameUser, async function(req, res, next) {
    let { userId } = req.params;
    let sql = 'SELECT * FROM users WHERE id = ' + userId;
    
    try {
        let results = await db(sql);
        let user = results.data[0];
        delete user.password;  // don't return the password
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
