const Application = require("../models").Application;

module.exports = {
  create(req, res) {
    return Application.create({
      clientId: req.body.clientId,
      stockIds: req.body.stockIds
    })
      .then(application => res.status(201).send(application))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Application.all()
      .then(applications => res.status(200).send(applications))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Application.findById(req.params.applicationId).then(application => {
      if (!application) {
        return res.status(400).send({
          message: "Application Not Found"
        });
      }

      return res.status(200).send(application);
    });
  },
  update(req, res) {
    return Application.findById(req.params.applicationId)
      .then(application => {
        if (!application) {
          res.status(400).send({
            message: "Application Not Found"
          });
        }

        return application
          .update({
            clientId: req.body.clientId || application.clientId,
            stockIds: req.body.stockIds || application.stockIds
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Application.findById(req.params.applicationId)
      .then(application => {
        if (!application) {
          res.status(400).send({
            message: "Application Not Found"
          });
        }

        return application
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};