const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { User } = require("../model");

router.post("/login", async (request, response, next) => {
  try {
    const { username, password } = request.body;
    if (!(username && password)) {
      response.status(400).send("All input is required");
    }
    const user = await User.findOne({
      where: { username },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { ...user.dataValues, password: undefined },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      response
        .status(200)
        .json({ ...user.dataValues, password: undefined, token });
    }
    response.status(400).send("Invalid Credentials");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
