const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dialog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userFrom' });
      this.belongsTo(User, { foreignKey: 'userTo' });
      // define association here
    }
  }
  Dialog.init({
    userFrom: DataTypes.INTEGER,
    userTo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dialog',
  });
  return Dialog;
};
