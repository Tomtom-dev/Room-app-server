'use strict';
module.exports = (sequelize, DataTypes) => {
  const room_respond = sequelize.define('room_respond', {
    message: DataTypes.STRING,
    answer: DataTypes.BOOLEAN
  }, {});
  room_respond.associate = function(models) {
    // associations can be defined here
  };
  return room_respond;
};