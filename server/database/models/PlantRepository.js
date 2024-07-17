const AbstractRepository = require("./AbstractRepository");

class PlantRepository extends AbstractRepository {
  constructor() {
    super({ table: "plant" });
  }

  async create(plant) {
    const { name, surname, picture, place, userId, wateringFid, solarEid } =
      plant;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, surname, picture, place, user_id, watering_frequency_id, solar_expo_id) values( ?, ?, ?, ?, ?, ?, ?)`,
      [name, surname, picture, place, userId, wateringFid, solarEid]
    );

    return result.insertId;
  }

  async readByUser(id) {
    const [rows] = await this.database.query(
      `SELECT id, name, surname, picture, place FROM ${this.table} WHERE user_id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = PlantRepository;
