const { sequelize, DataTypes } = require("../../connection");

module.exports = sequelize.define("Token", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ip_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  expired: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
