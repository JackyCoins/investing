// Import libraries
const next = require("next");

// Import controllers
const stocksController = require("../controllers").stocks;

module.exports = app => {
  app.get("/api", (req, res) => res.status(200).send({message: 'Welcome to the API!'}));

  app.post("/api/stocks", stocksController.create);
  app.get("/api/stocks", stocksController.list);
  app.get("/api/stocks/:stockId", stocksController.retrieve);
  app.put("/api/stocks/:stockId", stocksController.update);
  app.delete("/api/stocks/:stockId", stocksController.destroy);
};