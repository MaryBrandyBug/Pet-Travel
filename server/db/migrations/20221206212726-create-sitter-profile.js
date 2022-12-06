/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SitterProfiles', {
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
      status: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aboutMe: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cats: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      dogs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reptiles: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      fish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      smallPets: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      horses: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      birds: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
      sitterPh1: {
        type: Sequelize.STRING,
      },
      sitterPh2: {
        type: Sequelize.STRING,
      },
      sitterPh3: {
        type: Sequelize.STRING,
      },
      sitterPh4: {
        type: Sequelize.STRING,
      },
      sitterPh5: {
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
    await queryInterface.dropTable('SitterProfiles');
  },
};
