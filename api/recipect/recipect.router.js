const { createRecipect } = require("./recipect.controller");
const router = require("express").Router();

router.post("/", createRecipect);
// router.get("/", getUsers);
// router.get("/:id", getUserByUserId);
// router.post("/login", login);
// router.patch("/", updateUsers);
// router.patch("/", updateImage);
// router.delete("/", deleteUser);
module.exports = router;
