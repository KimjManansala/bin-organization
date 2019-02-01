'use strict';
module.exports = (sequelize, DataTypes) => {
  const bin = sequelize.define('bin', {
    name: DataTypes.STRING
  }, {});
  bin.associate = function(models) {
    // associations can be defined here
    models.shelve.hasMany(bin, {foreignKey: 'shelve_id', sourceKey: 'id'})
    bin.belongsTo(models.shelve, {foreignKey: 'shelve_id', sourceKey: 'id'})
  };
  return bin;
};