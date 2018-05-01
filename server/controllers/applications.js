const Application = require("../models").Application;

module.exports = {
  create(req, res) {
    return Application.create({
      title: req.body.title,
      logo: req.body.logo,
      lucrativenessPerSixMonths: req.body.lucrativenessPerSixMonths,
      earnings: req.body.earnings,
      price: req.body.price
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
            title: req.body.title || application.title,
            logo: req.body.logo || application.logo,
            lucrativenessPerSixMonths: req.body.lucrativenessPerSixMonths || application.lucrativenessPerSixMonths,
            earnings: req.body.earnings || application.earnings,
            price: req.body.price || application.price
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