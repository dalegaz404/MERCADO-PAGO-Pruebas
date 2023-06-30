const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const User = sequelize.define('usuario', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    login: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.INTEGER, allowNull: false },
  });

  return User;
 };