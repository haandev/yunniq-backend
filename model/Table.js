const { sequelize, DataTypes } = require("./../connection");

const Company = require("./Company");

const Table = sequelize.define("Table", {
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

Table.belongsTo(Company, {
  foreignKey: "company_id",
});

module.exports = Table;
