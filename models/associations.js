const Models = require("./loader");

Models["Sample"].belongsTo(Models["Company"], {
  foreignKey: "company_id",
});
/*Models["Company"].belongsTo(Models["Sample"], {
  foreignKey: "company_id",
});*/

Models["Category"].belongsTo(Models["Company"], {
  foreignKey: "company_id",
});
/*
Models["Company"].belongsTo(Models["Category"], {
  foreignKey: "company_id",
});
*/

Models["Product"].belongsTo(Models["Category"], {
  foreignKey: "category_id",
});
/*Models["Category"].belongsTo(Models["Product"], {
  foreignKey: "company_id",
});*/

Models["Table"].belongsTo(Models["Company"], {
  foreignKey: "company_id",
});
/*Models["Company"].belongsTo(Models["Table"], {
  foreignKey: "company_id",
});*/

Models["Token"].belongsTo(Models["Table"], {
  foreignKey: "table_id",
});
/*Models["Table"].belongsTo(Models["Token"], {
  foreignKey: "table_id",
});*/

Models["ProductLocale"].belongsTo(Models["Product"], {
  foreignKey: "product_id",
});
Models["Product"].hasMany(Models["ProductLocale"], {
  foreignKey: "product_id",
});

module.exports = Models;
