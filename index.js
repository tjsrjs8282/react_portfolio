const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 8080");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/get", function (req, res) {
  res.send("get 페이지 입니다.");
});

module.exports = app;
