"use strict";

const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Stocks",
      [
        {
          title: "Facebook",
          logo: "facebook.png",
          lucrativenessPerSixMonths: 12.43,
          earnings: -3.2,
          price: JSON.stringify({
            value: 211,
            currency: "USD"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          title: "Apple",
          logo: "apple.png",
          lucrativenessPerSixMonths: 64.1,
          earnings: 5.64,
          price: JSON.stringify({
            value: 352,
            currency: "USD"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          title: "Yandex",
          logo: "yandex.png",
          lucrativenessPerSixMonths: 353.3,
          earnings: 35.5,
          price: JSON.stringify({
            value: 2040,
            currency: "RUB"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          title: "Intel",
          logo: "intel.png",
          lucrativenessPerSixMonths: -4.23,
          earnings: 2.45,
          price: JSON.stringify({
            value: 190,
            currency: "USD"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          title: "Tesla",
          logo: "tesla.png",
          lucrativenessPerSixMonths: -54.5,
          earnings: 6.3,
          price: JSON.stringify({
            value: 290,
            currency: "USD"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          title: "Microsoft",
          logo: "microsoft.png",
          lucrativenessPerSixMonths: 43.5,
          earnings: -5.1,
          price: JSON.stringify({
            value: 174.3,
            currency: "USD"
          }),
          createdAt: currentDate,
          updatedAt: currentDate
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Stocks", null, {})
};
