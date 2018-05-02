'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
    clientId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};