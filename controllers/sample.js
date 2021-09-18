const express = require("express");
const { Sample } = require("./../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await Sample.findAll());
  } catch (error) {
    next(error);
  }
});
module.exports = router;
