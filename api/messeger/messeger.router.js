const {
  createMess,
  getUserListMess,
  getUserListMessfren,
} = require("./messeger.controller");
const router = require("express").Router();

router.post("/", createMess);
router.get("/:id", getUserListMess);
router.get("/list/:id", getUserListMessfren);

module.exports = router;
