/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SitterReviews', {
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
      reviewText: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      raiting: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      SitterProfileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SitterProfiles',
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
    await queryInterface.dropTable('SitterReviews');
  },
};
