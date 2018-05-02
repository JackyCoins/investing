'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    }
  }, {});

  Client.associate = models => {
    // associations can be defined here
  };

  return Client;
};