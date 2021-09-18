const fs = require("fs");
const Models = {};
const modelFiles = fs.readdirSync("./models/Model/");
modelFiles.forEach((fileName) => {
  //TODO: only capitals
  Models[fileName.split(".")[0]] = require("./Model/" + fileName);
});

module.exports = Models;
