var express = require('express');
var router = express.Router()
const db = require("../model/helper");
const { SECRET_KEY } = require('../config');

// generating tokens for the user to use when logging in
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const BCRYPT_WORK_FACTOR = 12;
// the code above hashes the user password and compares it to the one stored
// if the hashed password matches, the user can continue

/**
 * Register a user
 **/

router.post('/register', async (req, res, next) => {
    let { username, password, email } = req.body;
    let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    try {
        let sql = `
            INSERT INTO registration (username, hashedpassword, email)
            VALUES ('${username}', '${hashedPassword}', '${email}');
        `;
        await db(sql);
        res.send({ message: 'Registration succeeded' });
    } catch (err) {
        next(err);
    }
});


/**
 * Log in a user
 **/

router.post('/login', async (req, res, next) => {
    let { username, password } = req.body;

    try {
        let results = await db(`SELECT * FROM users WHERE username = '${username}';`);
        if (results.data.length === 0) {
            // Username not found
            res.status(400).send({ error: 'Login failed' });
        } else {
            let user = results.data[0];  // the user's row/record from the DB
            let passwordsEqual = await bcrypt.compare(password, user.password);
            if (passwordsEqual) {
                // Passwords match
                let payload = { userId: user.id };
                // Create token containing user ID
                let token = jwt.sign(payload, SECRET_KEY);
                // Also return user (without password)
                delete user.password;
                res.send({
                    message: 'Login succeeded',
                    token: token,
                    user: user
                });
            } else {
                // Passwords don't match
                res.status(400).send({ error: 'Login failed' });
            }
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;