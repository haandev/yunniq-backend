const { Sequelize, DataTypes } = require("sequelize");

const dbConfig = {
  dialect: "mysql",
  port: 3306,
  username: "root",
  password: "000000",
  host: "localhost",
  database: "yunniq",
}; //TODO : environment varibles

const sequelize = new Sequelize(dbConfig);
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
async function sync() {
  try {
    await sequelize.sync({
      alter: true, // TODO : check environment, alter true development only
    });
    console.log(`Database & tables created!`);
  } catch (error) {
    console.error("Unable to sync:", error);
  }
}

module.exports = {
  sequelize,
  DataTypes: DataTypes,
  sync,
  connect,
};
