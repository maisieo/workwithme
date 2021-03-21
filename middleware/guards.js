const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

// checking to see if the user is authorized
function ensureUserLoggedIn(req, res, next) {
    let token = req.headers['x-access-token'];

    try {
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (err) {
        // Throws error on invalid/missing token
        res.status(401).send({ error: 'Unauthorized' });
    }
}

// making sure user can only look at their own page
function ensureSameUser(req, res, next) {
    let token = req.headers['x-access-token'];

    try {
        let payload = jwt.verify(token, SECRET_KEY);

        if (payload.userId === Number(req.params.userId)) {
            next();
        } else {
            res.status(401).send({ error: 'Unauthorized' });
        }
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized' });
    }
}


module.exports = {
    ensureUserLoggedIn,
    ensureSameUser
};