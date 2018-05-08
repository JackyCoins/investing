"use strict";

const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Clients",
      [
        {
          firstname: "Никита",
          lastname: "Русанов",
          middlename: "Дмитриевич",
          birthday: "1996-04-11",
          city: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          firstname: "Дарья",
          lastname: "Иванова",
          middlename: "Александровна",
          birthday: "1984-02-23",
          city: 0,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          firstname: "Дмитрий",
          lastname: "Смольный",
          middlename: "Владимирович",
          birthday: "1970-11-02",
          city: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Clients", null, {})
};
