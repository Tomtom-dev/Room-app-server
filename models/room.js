'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  room.associate = function(models) {
    room.belongsTo(models.user)
    room.hasMany(models.room_respond)
  };
  return room;
};