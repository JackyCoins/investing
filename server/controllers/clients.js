const Client = require("../models").Client;

module.exports = {
  create(req, res) {
    return Client.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    })
      .then(client => res.status(201).send(client))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Client.all()
      .then(clients => res.status(200).send(clients))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Client.findById(req.params.clientId).then(client => {
      if (!client) {
        return res.status(400).send({
          message: "Client Not Found"
        });
      }

      return res.status(200).send(client);
    });
  },
  update(req, res) {
    return Client.findById(req.params.clientId)
      .then(client => {
        if (!client) {
          res.status(400).send({
            message: "Client Not Found"
          });
        }

        return client
          .update({
            firstname: req.body.firstname || client.firstname,
            lastname: req.body.lastname || client.lastname
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Client.findById(req.params.clientId)
      .then(client => {
        if (!client) {
          res.status(400).send({
            message: "Client Not Found"
          });
        }

        return client
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};