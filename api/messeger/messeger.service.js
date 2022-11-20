const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into messeger(title, user_id, body, create_date, recipect_id) 
                values(?,?,?,?,?)`,
      [data.title, data.user_id, data.body, data.srete_date, data.recipect_id],
      (error, results) => {
        if (error) {
          callBack(error), null;
        } else callBack(null, results);
      }
    );
  },
  getUserListMess: (id, callBack) => {
    pool.query(
      `SELECT messeger.id
      FROM registration, messeger
      WHERE messeger.user_id = registration.id AND registration.id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserListMessfren: (id, callBack) => {
    pool.query(
      `SELECT registration.username
      FROM registration, messeger, recipect
      WHERE messeger.id =? AND messeger.recipect_id = recipect.id and registration.id = recipect.user_id`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
