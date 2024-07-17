const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { username, email, password } = user;
    
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.username, u.email, u.password, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id`
    );

    return rows;
  }

  async readById(id) {
    const [row] = await this.database.query(
      `SELECT u.username, u.email, u.password, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id WHERE u.id=?`,
      [id]
    );

    return row[0];
  }

  async searchByEmail(email) {
    const [result] = await this.database.query(
      `SELECT username, email, password, r.name AS role FROM ${this.table} JOIN role AS r ON user.role_id=r.id WHERE email = ?`,
      [email]
    );

    return result;
  }
}

module.exports = UserRepository;
