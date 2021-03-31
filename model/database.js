require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "workwithme",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  let sql =
    "DROP TABLE if exists bubbles;CREATE TABLE bubbles(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, firstname VARCHAR(30) NOT NULL, location VARCHAR(30) NOT NULL, workstations INT NOT NULL, wifi TINYINT(1), petfriendly TINYINT(1), kitchen TINYINT(1), quietspace TINYINT(1), wheelchair TINYINT(1), smoking TINYINT(1));";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation 'bubbles' was successful!");

    console.log("Closing...");
  });

  con.end();
});
