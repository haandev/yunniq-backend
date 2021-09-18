const { sequelize, DataTypes } = require("./../connection");

const Company = require("./Company");

const User = sequelize.define("User", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
});

User.belongsTo(Company, {
  foreignKey: "company_id",
});

module.exports = User;
