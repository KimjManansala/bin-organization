'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bins",
      [
        {
          name: "bin-admin",
          shelve_id: 1,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bins", null, {});
  }
};