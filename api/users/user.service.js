const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into registration(username, email, password, urlimage, number, is_active) 
                values(?,?,?,?,?,?)`,
      [
        data.username,
        data.email,
        data.password,
        data.urlimage,
        data.number,
        data.is_active,
      ],
      (error, results) => {
        if (error) {
          callBack(error), null;
        } else callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id_registion,username,email,number, urlimage, is_active from registration where id_registion = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select id_registion,username,email,number, urlimage, is_active from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set username=?, email=?, password=?, urlimage=?, number=? where id_registion = ?`,
      [
        data.username,
        data.email,
        data.password,
        data.urlimage,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id_registion = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateImage: (data, callBack) => {
    pool.query(
      `update registration set urlimage=? where id_registion = ?`,
      [data.urlimage, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
