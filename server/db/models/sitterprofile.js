const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SitterProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, SitterReview }) {
      this.belongsTo(User);
      this.hasMany(SitterReview);
    }
  }
  SitterProfile.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    cats: DataTypes.BOOLEAN,
    dogs: DataTypes.BOOLEAN,
    reptiles: DataTypes.BOOLEAN,
    fish: DataTypes.BOOLEAN,
    smallPets: DataTypes.BOOLEAN,
    horses: DataTypes.BOOLEAN,
    birds: DataTypes.BOOLEAN,
    published: DataTypes.BOOLEAN,
    sitterPh1: DataTypes.STRING,
    sitterPh2: DataTypes.STRING,
    sitterPh3: DataTypes.STRING,
    sitterPh4: DataTypes.STRING,
    sitterPh5: DataTypes.STRING,
    mainPhoto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SitterProfile',
  });
  return SitterProfile;
};
