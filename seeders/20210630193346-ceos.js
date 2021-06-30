'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('ceos', [
      {
        name: 'Steve Jobs',
        slug: 'steve_jobs',
        first_year_active: 1976,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        name: 'Mike Scott',
        slug: 'mike_scott',
        first_year_active: 1978,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        name: 'John Sculley',
        slug: 'john_sculley',
        first_year_active: 1983,
        createdAt: new Date(),
        updatedAt: new Date()

      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('ceos', null, {});
  }
};
