"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Data",
      [
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "10:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.5,
          waterusages: 7,
          waterlevels: "1.0000",
          time: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.3,
          waterusages: 7,
          waterlevels: "1.5000",
          time: "12:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.6,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "13:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "0.6000",
          time: "14:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.8000",
          time: "15:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.8,
          waterusages: 15,
          waterlevels: "1.0000",
          time: "16:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "17:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "19:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "20:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "21:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "22:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "23:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "24:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "1:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "2:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "3:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "4:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "1:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "5:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "6:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "7:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity: 0.2,
          waterusages: 10,
          waterlevels: "1.0000",
          time: "8:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Data", null, {});
  },
};
