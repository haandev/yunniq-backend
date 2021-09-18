const fs = require("fs");
const { toKebabCase, isStartsCapital } = require("./../utils");

const Controllers = {};
const controllerFiles = fs.readdirSync("./controller/");
const ControllersLoader = (app) => {
  controllerFiles.forEach((fileName) => {
    if (isStartsCapital(fileName)) {
      const pureName = fileName.split(".")[0];
      Controllers[pureName] = require("./" + fileName);
      app.use("/" + toKebabCase(pureName), Controllers[pureName]);
    }
  });
};

module.exports = ControllersLoader;
