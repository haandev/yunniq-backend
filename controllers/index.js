const fs = require("fs");

const Controllers = {};
const controllerFiles = fs.readdirSync("./controllers/");
controllerFiles.forEach((fileName) => {
  if (!["index", "index.js"].includes(fileName)) {
    Controllers[fileName.split(".")[0]] = require("./" + fileName);
  }
});

module.exports = Controllers;
