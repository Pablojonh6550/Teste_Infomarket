const express = require("express");
const makeRoutes = require("./routes");
const app = express();
// informa que o use json como padrão
app.use(express.json());
// configuração cors - liberando rotas
app.use((req, res, next) => {
  res.set("access-control-allow-origin", "*");
  res.set("access-control-allow-methods", "*");
  res.set("access-control-allow-headers", "*");
  next();
});

makeRoutes(app);

module.exports = app;
