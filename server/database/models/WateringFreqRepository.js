const AbstractRepository = require("./AbstractRepository");

class WateringFreqRepository extends AbstractRepository {
  constructor() {
    super({ table: "watering_frequency" });
  }

  async readAll() {
    const [result] = await this.database.query(
      `select id, frequency from ${this.table}`
    );
    return result;
  }
}

module.exports = WateringFreqRepository;
