'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert(
    "room_responds",
    [
      {
        message:"hello, i'm interested",
        createdAt: new Date(),
        updatedAt: new Date(),
        roomId:2,
        userId:1
      },
      {
        message:"test",
        createdAt: new Date(),
        updatedAt: new Date(),
        roomId:1,
        userId:2
      }
    ],
    {}
  )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("room_responds",null,{})
  }
};
