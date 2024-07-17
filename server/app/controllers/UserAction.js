const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.readById(id);

    if (user != null) res.json(user);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);
    console.info(`New user created with id ${insertId}`);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.user.destroy(id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, create, destroy };
