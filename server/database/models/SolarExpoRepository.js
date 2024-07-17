const AbstractRepository = require("./AbstractRepository");

class SolarExpoRepository extends AbstractRepository {
  constructor() {
    super({ table: "solar_expo" });
  }

  async readAll() {
    const [result] = await this.database.query(
      `select id, exposition, description from ${this.table}`
    );
    return result;
  }
}

module.exports = SolarExpoRepository;
