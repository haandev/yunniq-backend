const { sequelize, DataTypes } = require("../../connection");

module.exports = sequelize.define("Category", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  o: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
