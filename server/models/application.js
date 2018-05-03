'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stockIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    }
  }, {});

  Application.associate = models => {
    Application.hasOne(models.Client, {
      foreignKey: "id",
      as: 'client'
    });

    Application.hasMany(models.Stock, {
      foreignKey: "id",
      as: 'stocks'
    });
  };
  return Application;
};