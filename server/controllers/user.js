module.exports = (app, db) => {
  app.get("/users", (req, res) =>
    db.users.findAll().then((result) => res.json(result))
  );

  app.get("/user/:id", (req, res) =>
    db.users.findByPk(req.params.id).then((result) => res.json(result))
  );

  app.post("/user", (req, res) =>
    db.users
      .create({
        email: req.body.email,
        password: req.body.password,
      })
      .then((result) => res.json(result))
  );

  app.put("/user/:id", (req, res) =>
    db.users
      .update(
        {
          email: req.body.email,
          password: req.body.password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((result) => res.json(result))
  );

  app.delete("/user/:id", (req, res) =>
    db.users
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => res.json(result))
  );
};
