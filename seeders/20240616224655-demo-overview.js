"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Overviews",
      [
        {
          consumption: 0.2,

          time: "10:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.5,
          time: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.3,
          time: "12:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.6,

          time: "13:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "14:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "15:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.8,

          time: "16:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "17:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "19:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "20:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "21:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "22:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "23:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "24:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "1:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "2:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "3:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "4:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "1:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "5:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "6:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "7:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consumption: 0.2,

          time: "8:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Overviews", null, {});
  },
};
