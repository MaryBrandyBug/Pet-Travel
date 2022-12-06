const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ParentReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, ParentProfile }) {
      this.belongsTo(User);
      this.belongsTo(ParentProfile);
    }
  }
  ParentReview.init({
    UserId: DataTypes.INTEGER,
    raiting: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    ParentProfileId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ParentReview',
  });
  return ParentReview;
};
