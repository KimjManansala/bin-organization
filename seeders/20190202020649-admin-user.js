'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          password: 'admin',
          firstName: 'admin',
          lastName: 'admin',
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