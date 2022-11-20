const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into recipect( user_id, mess_id, is_read) 
                values(?,?,?)`,
      [data.user_id, data.mess_id, data.is_read],
      (error, results) => {
        if (error) {
          callBack(error), null;
        } else callBack(null, results);
      }
    );
  },
};
