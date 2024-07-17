const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.wateringFrequency.readAll();

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
