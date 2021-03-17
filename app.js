var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// generating tokens for the user to use when logging in
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const BCRYPT_WORK_FACTOR = 12;
let payload = {userID: userId};
let token = jwt.sign(payload, process.env.SECRET_KEY);
let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
let passwordMatched = await bcrypt.compare(attempt, hashedPassword);
// the code above hashes the user password and compares it to the one stored
// if the hashed password matches, the user can continue

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
