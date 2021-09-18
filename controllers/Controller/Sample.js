const express = require("express");
const { Sample } = require("../../models");

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    response.send(await Sample.findAll());
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    const result = await Sample.create({ ...request.body });
    response.send(result);
  } catch (error) {}
});
module.exports = router;
