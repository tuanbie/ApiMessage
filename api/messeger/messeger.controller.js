const {
  create,
  getUserListMess,
  getUserListMessfren,
} = require("./messeger.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
// const { sign } = require("jsonwebtoken");

module.exports = {
  createMess: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      } else
        res.json({
          success: 1,
          data: results,
        });
    });
  },
  getUserListMess: (req, res) => {
    const id = req.params.id;
    getUserListMess(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUserListMessfren: (req, res) => {
    const id = req.params.id;
    getUserListMessfren(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
