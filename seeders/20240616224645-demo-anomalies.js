"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Anomalies",
      [
        {
          name: "Laptop Charger",
          status: true,
          date: "21/04/2023 18:39",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop Charger",
          status: true,
          date: "21/04/2023 18:39",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop Charger",
          status: true,
          date: "21/04/2023 18:39",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop Charger",
          status: true,
          date: "21/04/2023 18:39",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop Charger",
          status: true,
          date: "21/04/2023 18:39",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Anomalies", null, {});
  },
};
