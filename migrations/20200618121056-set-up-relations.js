'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("rooms","userId", {
      type: Sequelize.INTEGER,
      reference:{
        model:"user",
        key:"id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
    await queryInterface.addColumn("room_responds","roomId", {
      type: Sequelize.INTEGER,
      reference:{
        model:"room",
        key:"id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
    await queryInterface.addColumn("room_responds","userId", {
      type: Sequelize.INTEGER,
      reference:{
        model:"user",
        key:"id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn("rooms","userId")
   await queryInterface.removeColumn("room_responds","roomId")
   await queryInterface.removeColumn("room_responds","userId")
  }
};
