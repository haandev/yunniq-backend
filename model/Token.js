const { sequelize, DataTypes } = require("./../connection");

const Table = require("./Table");

const Token = sequelize.define("Token", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  ip_address: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  expired: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Token.belongsTo(Table, {
  foreignKey: "table_id",
});

module.exports = Token;
