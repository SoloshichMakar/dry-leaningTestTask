module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.STRING,
    restoreCode: DataTypes.STRING,
  });

  return User;
};
