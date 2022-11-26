const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into messeger(title, id_registion, body, create_date, id_recipect) 
                values(?,?,?,?,?)`,
      [
        data.title,
        data.id_registion,
        data.body,
        data.srete_date,
        data.id_recipect,
      ],
      (error, results) => {
        if (error) {
          callBack(error), null;
        } else callBack(null, results);
      }
    );
  },
  getListFriend: (id, callBack) => {
    pool.query(
      `select distinct r.*
      FROM messeger m 
      INNER join recipect rp on m.id_recipect=rp.id_recipect 
      INNER join registration r on rp.id_registion=r.id_registion 
      where m.id_registion=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  // getUserListMess: (id, callBack) => {
  //   pool.query(
  //     `SELECT messeger.id
  //     FROM registration, messeger
  //     WHERE messeger.user_id = registration.id AND registration.id = ?`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
  // getUserListMessfren: (id, callBack) => {
  //   pool.query(
  //     `SELECT registration.*
  //     FROM registration, messeger, recipect
  //     WHERE messeger.id =? AND messeger.recipect_id = recipect.id and registration.id = recipect.user_id`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
};
