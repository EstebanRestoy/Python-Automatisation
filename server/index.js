require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const apiUser = require("./controllers/user");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();
console.log(db.users);
apiUser(app, db);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

/* ROUTES */

// Script1
app.post("/script/:id", async (req, res) => {
  try {
    var spawn = require("child_process").spawn;
    var process = spawn("python", [
      "Scripts/OdinSignatureTracker.py",
      1,
      "deadead",
      "fedeaded",
    ]);
    process.on("exit", () => {
      res.send(null);
    });
    console.log(process.connected);
  } catch (error) {
    console.error(error);
  }
});

app.get("/scripts", async (req, res) => {
  try {
    const script = await pool.query("select * from Script");
    res.json(script.rows);
  } catch (error) {
    console.error(error);
  }
});
