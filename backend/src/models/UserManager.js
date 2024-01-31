const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, id_role) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, 2]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readUserByEmail(email) {
    const [[row]] = await this.database.query(
      `select * from ${this.table} where email = ? LIMIT 1`,
      [email]
    );

    return row;
  }

  async readUserById(id) {
    const [[rows]] = await this.database.query(
      `select * from ${this.table} where id = ? LIMIT 1`,
      [id]
    );

    return rows;
  }
  // The U of CRUD - Update operation

  async update(id, user) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname=?, lastname=?, email=?, image=?, id_role=? where id=?`,
      [user.firstname, user.lastname, user.email, user.image, user.id_role, id]
    );

    return result;
  }

  async updateRole(id, user) {
    const [result] = await this.database.query(
      `update ${this.table} set id_role=? where id=?`,
      [user.id_role, id]
    );

    return result;
  }
  // The D of CRUD - Delete operation

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ? `,
      [id]
    );
    return rows;
  }
}
module.exports = UserManager;
