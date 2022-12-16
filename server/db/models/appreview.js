const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AppReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User);
    }
  }
  AppReview.init({
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    reviewText: DataTypes.TEXT,
    experienceDate: DataTypes.DATE,
    raiting: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'AppReview',
  });
  return AppReview;
};
