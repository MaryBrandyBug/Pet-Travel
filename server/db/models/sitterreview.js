const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SitterReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, SitterProfile }) {
      this.belongsTo(User);
      this.belongsTo(SitterProfile);
    }
  }
  SitterReview.init({
    UserId: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    raiting: DataTypes.FLOAT,
    SitterProfileId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SitterReview',
  });
  return SitterReview;
};
