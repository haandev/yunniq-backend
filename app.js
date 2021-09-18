require("dotenv").config();
const express = require("express");
const { connect, sync } = require("./connection");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  await connect();
  require("./controller")(app);

  await sync();

  app.get("/", function (request, response) {
    response.send("Welcome to Yunniq API 0.0.1!");
  });

  app.listen(process.env.APP_PORT, () => {
    console.log(
      "Welcome to Yunniq API 0.0.1! Listening on port 80",
      "http://localhost:" + process.env.APP_PORT
    );
  });
})();
