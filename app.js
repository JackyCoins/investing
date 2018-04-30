// Import libraries
const express = require("express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = app
  .prepare()
  .then(() => {
    const server = express();

    server.use(logger("dev"));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    const assetsHandler = express.static(".");

    server.use(assetsHandler);

    require("./server/routes")(server);
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    return server;
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

module.exports = server;
