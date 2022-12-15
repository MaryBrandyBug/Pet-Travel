/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Светлана',
      email: 'sveta.ma@mail.ru',
      password: '$2b$10$xddHGax3YcjLbqYpB.aVIeUzijIdRIpsdlBmrT34Oem.LcC9IDQdS',
      role: 'sitter',
      surname: 'Ма',
      inst: 'a.mini',
      telegram: null,
      facebook: null,
      mainPhoto: '2022-12-14T13:12:25.938Z-beaverPIC.jpg',
      createdAt: '2022-12-14 15:16:07.100 +0300',
      updatedAt: '2022-12-14 15:16:07.100 +0300',
    },
    {
      name: 'Сергей',
      email: 'serg.i@mail.ru',
      password: '$2b$10$xddHGax3YcjLbqYpB.aVIeUzijIdRIpsdlBmrT34Oem.LcC9IDQdS',
      role: 'parent',
      surname: 'Иванов',
      inst: 'i.serg',
      telegram: null,
      facebook: null,
      mainPhoto: '2022-12-14T13:12:25.938Z-beaverPIC.jpg',
      createdAt: '2022-12-14 15:16:07.100 +0300',
      updatedAt: '2022-12-14 15:16:07.100 +0300',
    },
    {
      name: 'Лиля',
      email: 'lili.k@mail.ru',
      password: '$2b$10$xddHGax3YcjLbqYpB.aVIeUzijIdRIpsdlBmrT34Oem.LcC9IDQdS',
      role: 'parent',
      surname: 'Ким',
      inst: 'lili',
      telegram: null,
      facebook: null,
      mainPhoto: '2022-12-14T13:12:25.938Z-beaverPIC.jpg',
      createdAt: '2022-12-14 15:16:07.100 +0300',
      updatedAt: '2022-12-14 15:16:07.100 +0300',
    },
    {
      name: 'Родион',
      email: 'rod.bo@mail.ru',
      password: '$2b$10$xddHGax3YcjLbqYpB.aVIeUzijIdRIpsdlBmrT34Oem.LcC9IDQdS',
      role: 'sitter',
      surname: 'Борисов',
      inst: 'rodik',
      telegram: null,
      facebook: null,
      mainPhoto: '2022-12-14T13:12:25.938Z-beaverPIC.jpg',
      createdAt: '2022-12-14 15:16:07.100 +0300',
      updatedAt: '2022-12-14 15:16:07.100 +0300',
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
