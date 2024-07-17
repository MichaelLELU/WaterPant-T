const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plantes = await tables.plant.readByUser(id);

    res.status(200).json(plantes);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const plant = req.body;
  try {
    const insertId = await tables.plant.create(plant);
    console.info(`New plant created with id ${insertId}`);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, add };
