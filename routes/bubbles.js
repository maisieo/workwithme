var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET bubble list
router.get("/", async (req, res, next) => {
  try {
    let results = await db("SELECT * FROM bubbles;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET one bubble
router.get("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let sql = `SELECT * FROM bubbles WHERE id = ${id}`; //mysql statement
    let results = await db(sql);
    if (results.data.length === 1) {
      //if a result is found
      res.send(results.data[0]); //send the first (and only) one in the list
    } else {
      res.status(404).send({ error: "Bubble not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new bubble into the DB
router.post("/", async (req, res) => {
  let { firstname, lastname } = req.body;
  let sql = `
  INSERT INTO buubles (firstname, lastname)     name,
  handleChange,
  location,
  workstations,
  wifi,
  petfriendly,
  kitchen,
  quietspace,
  wheelchair,
  smoking,
  VALUES ("${firstname}", "${lastname}")
  `;
  try {
    let results = await db(sql);
    results = await db("SELECT * FROM bubbles");
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// DELETE a bubble from the DB
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let sql = `SELECT * FROM  bubble WHERE id = ${id}`;
    let results = await db(sql);
    if (results.data.length === 1) {
      sql = `DELETE FROM bubble WHERE id = ${id}`;
      await db(sql); //calls again to return all students
      results - (await db("SELECT * FROM bubbles"));
      res.send(results.data);
    } else {
      res.status(404).send({ error: "Bubble with that name not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
