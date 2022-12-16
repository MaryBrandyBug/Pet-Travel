/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ParentProfileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ParentProfiles',
          key: 'id',
        },
      },
      petName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      petAge: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      petPhoto: {
        type: Sequelize.STRING,
        defaultValue: '2022-12-16T10:53:11.108Z-mainphotoPet.jpg',
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
    await queryInterface.dropTable('Pets');
  },
};
