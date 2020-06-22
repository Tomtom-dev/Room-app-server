'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "rooms",
      [
        {
          title:"free room for help gardening",
          location:"Amsterdam",
          description:"I Propose a free room for a gardening help",
          image:"https://expatpaysbas.com/wp-content/uploads/2018/01/logement-amsterdam-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId:1
        },
        {
          title:"Room available during the week ",
          location:"Rotterdam",
          description:"Room free for the week in exchange of help for groceries and cleaning",
          image:"https://thumb.housinganywhere.com/images/listing/1468775/450x300/ae7613e5-24d2-4d8e-b20e-2fc827e35fa1?t=crop",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId:2
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("rooms",null,{})
  }
};
