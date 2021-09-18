const express = require("express");
const { Company } = require("../../models");

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    response.send(await Company.findAll());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    response.send(
      await Company.findOne({
        where: { id: parseInt(id) },
      })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    const result = await Company.create({ ...request.body });
    response.send(result);
  } catch (error) {}
});

router.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    response.send(
      await Company.update({ ...request.body }, { where: { id: parseInt(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    console.log(id);
    await Company.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
