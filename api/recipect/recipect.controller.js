const { create } = require("./recipect.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
// const { sign } = require("jsonwebtoken");

module.exports = {
  createRecipect: (req, res) => {
    const body = req.body;
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
};
