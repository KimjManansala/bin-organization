'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    name: DataTypes.STRING
  }, {});
  item.associate = function(models) {
    models.user.hasMany(item, {foreignKey: 'user_id', sourceKey: 'id'})
    item.belongsTo(models.user, {foreignKey: 'user_id', sourceKey: 'id'})
  };
  return item;
};