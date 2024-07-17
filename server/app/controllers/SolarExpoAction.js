const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const solarExpo = await tables.solarExpo.readAll();

    res.status(200).json(solarExpo);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
