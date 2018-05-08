'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    middlename: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATE
    },
    city: {
      type: DataTypes.INTEGER
    }
  }, {});

  Client.associate = models => {
    // associations can be defined here
  };

  return Client;
};