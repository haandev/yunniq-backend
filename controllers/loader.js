const fs = require("fs");

const Controllers = {};
const controllerFiles = fs.readdirSync("./controllers/Controller/");
const ControllersLoader = (app) => {
  controllerFiles.forEach((fileName) => {
    const pureName = fileName.split(".")[0];
    Controllers[pureName] = require("./Controller/" + fileName);
    app.use("/" + pureName.toLowerCase(), Controllers[pureName]);
  });
};

module.exports = ControllersLoader;
