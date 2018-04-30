const Stock = require("../models").Stock;

module.exports = {
  create(req, res) {
    return Stock.create({
      title: req.body.title,
      logo: req.body.logo,
      lucrativenessPerSixMonths: req.body.lucrativenessPerSixMonths,
      earnings: req.body.earnings,
      price: req.body.price
    })
      .then(stock => res.status(201).send(stock))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Stock.all()
      .then(stocks => res.status(200).send(stocks))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Stock.findById(req.params.stockId).then(stock => {
      if (!stock) {
        return res.status(400).send({
          message: "Stock Not Found"
        });
      }

      return res.status(200).send(stock);
    });
  },
  update(req, res) {
    return Stock.findById(req.params.stockId)
      .then(stock => {
        if (!stock) {
          res.status(400).send({
            message: "Stock Not Found"
          });
        }

        return stock
          .update({
            title: req.body.title || stock.title,
            logo: req.body.logo || stock.logo,
            lucrativenessPerSixMonths: req.body.lucrativenessPerSixMonths || stock.lucrativenessPerSixMonths,
            earnings: req.body.earnings || stock.earnings,
            price: req.body.price || stock.price
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Stock.findById(req.params.stockId)
      .then(stock => {
        if (!stock) {
          res.status(400).send({
            message: "Stock Not Found"
          });
        }

        return stock
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
