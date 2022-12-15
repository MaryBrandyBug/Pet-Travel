/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParentReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      raiting: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      reviewText: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ParentProfileId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ParentProfiles',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ParentReviews');
  },
};
