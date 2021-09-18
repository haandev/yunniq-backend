const express = require("express");
const { connect, sync } = require("./connection");

const app = express();

(async () => {
  await connect();
  const Controllers = require("./controllers");

  await sync();

  app.get("/", function (req, res) {
    res.send("Welcome to Yunniq API 0.0.1!");
  });

  app.use("/sample", Controllers["sample"]);

  app.listen(80, () => {
    console.log("Welcome to Yunniq API 0.0.1! Listening on port 80");
    console.log("http://localhost:80");
  });
})();
