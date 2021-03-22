// require("dotenv").config();
// const mysql = require("mysql");


// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;

// const con = mysql.createConnection({
//   host: DB_HOST || "127.0.0.1",
//   user: DB_USER || "root",
//   password: DB_PASS,
//   database: DB_NAME || "todos",
//   multipleStatements: true
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql =
//     "DROP TABLE if exists users; CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username VARCHAR(30) NOT NULL UNIQUE, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, postcode VARCHAR(30) NOT NULL, hashedpassword VARCHAR(200) NOT NULL, email VARCHAR(200) NOT NULL, wsneeded INT NOT NULL);";
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Table creation 'users' was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });
