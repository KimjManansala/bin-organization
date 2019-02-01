'use strict';
module.exports = (sequelize, DataTypes) => {
  const shelve = sequelize.define('shelve', {
    name: DataTypes.STRING
  }, {});
  shelve.associate = function(models) {
    models.user.hasMany(shelve, {foreignKey: 'user_id', sourceKey: 'id'})
    shelve.belongsTo(models.user, {foreignKey: 'user_id', sourceKey: 'id'})
  };
  return shelve;
};