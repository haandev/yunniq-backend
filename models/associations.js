const Models = require("./loader");

Models["Sample"].belongsTo(Models["Company"], {
  foreignKey: "company_id",
});
Models["Category"].belongsTo(Models["Category"], {
  foreignKey: "company_id",
});
Models["Product"].belongsTo(Models["Product"], {
  foreignKey: "category_id",
});
Models["Table"].belongsTo(Models["Table"], {
  foreignKey: "company_id",
});
Models["Token"].belongsTo(Models["Token"], {
  foreignKey: "table_id",
});
module.exports = Models;
