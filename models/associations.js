const Models = require("./loader");
Models["Sample"].belongsTo(Models["Company"], {
  as: "company",
  foreignKey: "company_id",
});
module.exports = Models;
