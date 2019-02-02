"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "shelves",
      [
        {
          name: "bin-shelve",
          user_id: 1,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("shelves", null, {});
  }
};
