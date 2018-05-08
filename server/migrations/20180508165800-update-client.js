"use strict";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .addColumn("Clients", "middlename", { type: Sequelize.STRING })
      .then(() =>
        queryInterface.addColumn("Clients", "birthday", {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        })
      )
      .then(() =>
        queryInterface.addColumn("Clients", "city", {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
        })
      ),
  down: (queryInterface, Sequelize) =>
    queryInterface
      .removeColumn("Clients", "middlename")
      .then(() => queryInterface.removeColumn("Clients", "birthday"))
      .then(() => queryInterface.removeColumn("Clients", "city"))
};
