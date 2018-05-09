"use strict";

const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Applications",
      [
        {
          clientId: 1,
          stockIds: [1,5,3],
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          clientId: 2,
          stockIds: [4,2,1],
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          clientId: 3,
          stockIds: [4,1],
          createdAt: currentDate,
          updatedAt: currentDate
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Applications", null, {})
};
