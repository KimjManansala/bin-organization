'use strict';
module.exports = (sequelize, DataTypes) => {
  const bin = sequelize.define('bin', {
    name: DataTypes.STRING
  }, {});
  bin.associate = function(models) {
    // associations can be defined here
  };
  return bin;
};