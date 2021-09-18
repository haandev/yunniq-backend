const { sequelize, DataTypes } = require("../../connection");

module.exports = sequelize.define("Table", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  qrcode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  table_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
