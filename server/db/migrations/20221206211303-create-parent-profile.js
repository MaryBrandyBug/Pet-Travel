/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParentProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      introduction: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.TEXT,
      },
      responsibilities: {
        type: Sequelize.TEXT,
      },
      parentPh1: {
        type: Sequelize.STRING,
      },
      parentPh2: {
        type: Sequelize.STRING,
      },
      parentPh3: {
        type: Sequelize.STRING,
      },
      parentPh4: {
        type: Sequelize.STRING,
      },
      parentPh5: {
        type: Sequelize.STRING,
      },
      dateSince1: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      dateUntil1: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      dateSince2: {
        type: Sequelize.STRING,
      },
      dateUntil2: {
        type: Sequelize.STRING,
      },
      dateSince3: {
        type: Sequelize.STRING,
      },
      dateUntil3: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('ParentProfiles');
  },
};
