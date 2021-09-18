const { sequelize, DataTypes } = require("../../connection");

module.exports = sequelize.define("ProductLocale", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  locale: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
