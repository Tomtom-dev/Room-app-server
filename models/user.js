'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.room)
    user.hasMany(models.room_respond)
  };
  return user;
};