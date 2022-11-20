require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const messRouter = require("./api/messeger/messeger.router");
const recipectRouter = require("./api/recipect/recipect.router");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/users", userRouter);
app.use("/api/messeger", messRouter);
app.use("/api/recipect", recipectRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("sever up and running", process.env.APP_PORT);
});
