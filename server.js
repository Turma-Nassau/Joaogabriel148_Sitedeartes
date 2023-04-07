var express = require("express");
const fs = require("fs");
var app = express();
var PORT = 8000;
var db = require("./database");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function logger(request, response, next) {
  let log = `${new Date()}, ${request.method}, ${request.url}, ${
    request.body
  } \n`;
  fs.appendFile("./LOGGING.log", log, (err) => {
    if (err) throw err;
    console.log(log);
  });
  next();
}
app.use(logger);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
app.get("/", (req, res, next) => {
  res.json({ Mensagem: "Servidor Ok" });
});
app.get("/api/users", (req, res) => {
  var sql = "select * from user";
  var params = [];

  console.log(req);
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      status: "success",
      data: rows,
    });
  });
});
app.get("/api/users/:id", (req, res, next) => {
  var sql = "select * from user where id = ?";
  var params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

app.post("/api/users/", (req, res, next) => {
  var errors = [];
  if (!req.body.password) {
    errors.push("Falta o campo password!");
  }
  if (!req.body.email) {
    errors.push("Falta o campo email!");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
  var params = [data.name, data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

app.patch("/api/users/:id", (req, res, next) => {
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? req.body.password : null,
  };
  db.run(
    `UPDATE user set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "sucesso",
        data: data,
        changes: this.changes,
      });
    }
  );
});
app.delete("/api/users/:id", (req, res, next) => {
  db.run(
    "DELETE FROM user WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "apagado", changes: this.changes });
    }
  );
});
app.use((req, res) => {
  res.status(404);
  res.send("Endpoint não existe.");
});