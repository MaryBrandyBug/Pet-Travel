const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ParentProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, ParentReview, Pet }) {
      this.belongsTo(User);
      this.hasMany(ParentReview);
      this.hasMany(Pet);
    }
  }
  ParentProfile.init({
    UserId: DataTypes.INTEGER,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    title: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    location: DataTypes.TEXT,
    responsibilities: DataTypes.TEXT,
    parentPh1: DataTypes.STRING,
    parentPh2: DataTypes.STRING,
    parentPh3: DataTypes.STRING,
    parentPh4: DataTypes.STRING,
    parentPh5: DataTypes.STRING,
    dateSince1: DataTypes.DATE,
    dateUntil1: DataTypes.DATE,
    dateSince2: DataTypes.DATE,
    dateUntil2: DataTypes.DATE,
    dateSince3: DataTypes.DATE,
    dateUntil3: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ParentProfile',
  });
  return ParentProfile;
};
