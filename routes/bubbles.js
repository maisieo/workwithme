var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

// GET all bubbles
// router.get("/", async (req, res) => {
//   try {
//     let results = await db("SELECT * FROM bubbles");
//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

router.get("/", async (req, res) => {
  try {
    let results = await db("SELECT * FROM bubbles");

    if (results.data.length) {
      //check
      console.log("RESULTS", results);
      //send back the full list of items with status
      res.status(200).send(results.data);
    } else {
      res.status(404).send({ error: "Db is inaccesible or empty." });
    }
    //Catch any errors
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
  let { firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking } = req.body;
  let sql = `
  INSERT INTO bubbles (firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking)
  VALUES ('${firstname}', '${location}', ${workstations}, '${wifi}', '${petfriendly}', '${kitchen}', '${quietspace}', '${wheelchair}', '${smoking}');
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
    let sql = `SELECT * FROM bubbles WHERE id = ${id}`;
    let results = await db(sql);
    if (results.data.length === 1) {
      sql = `DELETE FROM bubbles WHERE id = ${id}`;
      await db(sql); //calls again to return all bubbles
      results = await db("SELECT * FROM bubbles");
      res.send(results.data);
    } else {
      res.status(404).send({ error: "Walk with that name not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
