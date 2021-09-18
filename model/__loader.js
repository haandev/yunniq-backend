const fs = require("fs");
const { isStartsCapital } = require("./../utils");

const Models = {};
const modelFiles = fs.readdirSync("./model/");
modelFiles.forEach((fileName) => {
  if (isStartsCapital(fileName)) {
    Models[fileName.split(".")[0]] = require("./" + fileName);
  }
});

module.exports = Models;
