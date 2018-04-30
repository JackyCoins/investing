// Import libraries
const http = require("http");
const appPromise = require("../app");

appPromise.then(app => {
  const port = parseInt(process.env.PORT, 10) || 8000;
  app.set("port", port);

  const server = http.createServer(app);
  server.listen(port);
});
