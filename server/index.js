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

app.post("/script", async (req, res) => {
  try {
    const script = await pool.query("select * from Script");
    res.json(script);
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
