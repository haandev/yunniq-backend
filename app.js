const express = require("express");
const { connect, sync } = require("./connection");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  await connect();
  require("./controllers")(app);

  await sync();

  app.get("/", function (req, res) {
    res.send("Welcome to Yunniq API 0.0.1!");
  });

  app.listen(80, () => {
    console.log("Welcome to Yunniq API 0.0.1! Listening on port 80");
    console.log("http://localhost:80");
  });
})();
