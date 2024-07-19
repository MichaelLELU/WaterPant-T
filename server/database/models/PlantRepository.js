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
      `SELECT p.id, p.name, p.surname, p.picture, p.place, wfi.frequency, sei.exposition, sei.description FROM ${this.table} AS p 
       JOIN watering_frequency AS wfi ON p.watering_frequency_id = wfi.id 
       JOIN solar_expo AS sei ON p.solar_expo_id = sei.id WHERE p.user_id = ?`,
      [id]
    );

    return rows;
  }

  async readByPlace(id) {
    const [rows] = await this.database.query(
      `SELECT id, name, surname, picture, place FROM ${this.table} WHERE place = ?`,
      [id]
    );

    return rows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PlantRepository;
