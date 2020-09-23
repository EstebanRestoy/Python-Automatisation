module.exports = (app, db) => {
  app.get("/scripts", (req, res) =>
    db.scripts.findAll().then((result) => res.json(result))
  );

  app.get("/script/:id", (req, res) =>
    db.scripts.findByPk(req.params.id).then((result) => res.json(result))
  );

  app.post("/script/start", (req, res) => {
    var name;
    db.scripts
      .findOne({
        where: {
          name: req.body.name,
        },
      })
      .then((script) => (name = "/../Scripts/" + script.name));
    try {
      var spawn = require("child_process").spawn;
      var process = spawn("python", [name, 1, "deadead", "fedeaded"]);
      process.on("exit", () => {
        console.log(null);
        res.send(name);
      });
      console.log(process.connected);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/script", (req, res) => {
    try {
      if (req.body.description == undefined || req.body.name == undefined) {
        throw "les champs ne sont pas tous renseigné";
      }
      db.scripts
        .create({
          description: req.body.description,
          name: req.body.name,
        })
        .then((result) => res.json(result));
    } catch (error) {
      res.json(error);
    }
  });

  app.put("/script/:id", (req, res) =>
    db.scripts
      .update(
        {
          description: req.body.description,
          name: req.body.name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((result) => res.json(result))
  );

  app.delete("/script/:id", (req, res) =>
    db.scripts
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => res.json(result))
  );
};
