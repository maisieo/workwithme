var express = require('express');
var router = express.Router();
const { ensureUserLoggedIn } = require('../middleware/guards');

// home page
// router.get('/', function(req, res, next) {
//   res.send({ message: 'Welcome to Work With Me! Where would you like to go?' });
// });

// // members only 
// router.get('/members-only', ensureUserLoggedIn, function(req, res, next) {
//     res.send({ message: 'Hi, there! Where would you like to go?' });
// });

module.exports = router;
