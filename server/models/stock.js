'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "compositeIndex",
      defaultValue: ""
    },
    logo: {
      type: DataTypes.STRING
    },
    lucrativenessPerSixMonths: {
      type: DataTypes.FLOAT
    },
    earnings: {
      type: DataTypes.FLOAT
    },
    price: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        value: 0,
        currency: "RUB"
      }
    }
  }, {});

  Stock.associate = models => {
    // associations can be defined here
  };

  return Stock;
};