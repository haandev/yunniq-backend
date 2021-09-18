const express = require("express");
const { Token } = require("../../models");
const { Table } = require("../../models");

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    response.send(
      await Token.findAll({
        include: [
          {
            model: Table,
          },
        ],
      })
    );
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    response.send(
      await Token.findOne({
        include: [
          {
            model: Table,
          },
        ],
        where: { id: parseInt(id) },
      })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    const result = await Token.create({ ...request.body });
    response.send(result);
  } catch (error) {}
});

router.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    response.send(
      await Token.update({ ...request.body }, { where: { id: parseInt(id) } })
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
    await Token.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
