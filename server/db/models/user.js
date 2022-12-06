const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Verification, AppReview, SitterProfile, SitterReview, ParentProfile, ParentReview,
    }) {
      this.hasMany(Verification);
      this.hasMany(AppReview);
      this.hasMany(SitterProfile);
      this.hasMany(SitterReview);
      this.hasMany(ParentProfile);
      this.hasMany(ParentReview);
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    surname: DataTypes.STRING,
    inst: DataTypes.STRING,
    telegram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    mainPhoto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
