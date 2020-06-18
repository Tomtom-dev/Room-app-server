'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  room.associate = function(models) {
    // associations can be defined here
  };
  return room;
};