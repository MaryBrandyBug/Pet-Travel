const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ParentProfile }) {
      this.belongsTo(ParentProfile);
    }
  }
  Pet.init({
    ParentProfileId: DataTypes.INTEGER,
    petName: DataTypes.STRING,
    petAge: DataTypes.INTEGER,
    type: DataTypes.STRING,
    petPhoto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};
