const router = require("express").Router();
const { Table, Company } = require("../model");

router.get("/", async (request, response, next) => {
  try {
    response.send(
      await Table.findAll({
        include: [
          {
            model: Company,
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
      await Table.findOne({
        include: [
          {
            model: Company,
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
    const result = await Table.create({ ...request.body });
    response.send(result);
  } catch (error) {}
});

router.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    response.send(
      await Table.update({ ...request.body }, { where: { id: parseInt(id) } })
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
    await Table.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
