const { createMess, getListFriend } = require("./messeger.controller");
const router = require("express").Router();

router.post("/", createMess);
router.get("/:id", getListFriend);

module.exports = router;
