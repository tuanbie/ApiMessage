const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, email, password, number) 
                values(?,?,?,?,?)`,
      [data.first_name, data.last_name, data.email, data.password, data.number],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
