const pool = require("./db");
var pgp = require("pg-promise");
var db = pgp(pool);

function getUsers() {
  db.one("SELECT * FROM User")
    .then(function (data) {
      console.log("DATA:", data.value);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
}

module.exports = Users;
