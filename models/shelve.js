'use strict';
module.exports = (sequelize, DataTypes) => {
  const shelve = sequelize.define('shelve', {
    name: DataTypes.STRING
  }, {});
  shelve.associate = function(models) {
    // associations can be defined here
  };
  return shelve;
};