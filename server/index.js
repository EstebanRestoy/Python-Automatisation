const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
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
