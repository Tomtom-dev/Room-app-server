'use strict';
module.exports = (sequelize, DataTypes) => {
  const room_respond = sequelize.define('room_respond', {
    message: DataTypes.STRING,
  }, {});
  room_respond.associate = function(models) {
    room_respond.belongsTo(models.room)
    room_respond.belongsTo(models.user)
  };
  return room_respond;
};