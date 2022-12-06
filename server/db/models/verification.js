const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User);
    }
  }
  Verification.init({
    UserId: DataTypes.INTEGER,
    done: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Verification',
  });
  return Verification;
};
