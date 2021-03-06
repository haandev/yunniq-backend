const { sequelize, DataTypes } = require("./../connection");

const Category = require("./Category");
const ProductLocale = require("./ProductLocale");

const Product = sequelize.define("Product", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

Product.belongsTo(Category);
Product.hasMany(ProductLocale);

module.exports = Product;
