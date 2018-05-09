// Import controllers
const stocksController = require("../controllers").stocks;
const clientsController = require("../controllers").clients;
const applicationsController = require("../controllers").applications;

module.exports = app => {
  app.get("/api", (req, res) => res.status(200).send({message: 'Welcome to the API!'}));

  // stocks
  app.post("/api/stocks", stocksController.create);
  app.get("/api/stocks", stocksController.list);
  app.get("/api/stocks/:stockId", stocksController.retrieve);
  app.put("/api/stocks/:stockId", stocksController.update);
  app.delete("/api/stocks/:stockId", stocksController.destroy);

  // clients
  app.post("/api/clients", clientsController.create);
  app.get("/api/clients", clientsController.list);
  app.get("/api/clients/:clientId", clientsController.retrieve);
  app.put("/api/clients/:clientId", clientsController.update);
  app.delete("/api/clients/:clientId", clientsController.destroy);

  // applications
  app.post("/api/applications", applicationsController.create);
  app.get("/api/applications", applicationsController.list);
  app.get("/api/applications/:applicationId", applicationsController.retrieve);
  app.put("/api/applications/:applicationId", applicationsController.update);
  app.delete("/api/applications/:applicationId", applicationsController.destroy);
  app.post("/api/applications/agreement/:applicationId", applicationsController.createAgreement);
};