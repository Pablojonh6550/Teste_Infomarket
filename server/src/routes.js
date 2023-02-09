const express = require("express");
const controller = require("./controller");
/**
 * @param {express.Express} app
 */
function makeRoutes(app) {
  app.get("/", function (req, res) {
    res.send("Hello World");
  });
  const router = express.Router();

  app.use("/api/people", router);

  router.get("/", controller.getPeoples);

  router.post("/", controller.postCreate);

  router.put("/:peopleId", controller.updatePeople);

  router.delete("/:peopleId", controller.deletePeople);
}

module.exports = makeRoutes;
