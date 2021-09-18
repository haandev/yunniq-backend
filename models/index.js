const fs = require("fs");

/** dont change this part */
const Models = {};
const modelFiles = fs.readdirSync("./models/");
modelFiles.forEach((fileName) => {
  if (!["index", "index.js"].includes(fileName)) {
    //TODO: only capitals
    Models[fileName.split(".")[0]] = require("./" + fileName);
  }
});
/** end */

/** define relations here */

Models["Sample"].belongsTo(Models["Company"], {
  as: "company",
  foreignKey: "company_id",
});
/** end */

module.exports = Models;
