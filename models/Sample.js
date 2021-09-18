const { sequelize, DataTypes } = require("../connection");
module.exports = sequelize.define(
  "Sample",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    //   tableName: "sample",
  }
);
